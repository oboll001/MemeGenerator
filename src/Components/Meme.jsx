import React,{useState} from 'react'
import '../App.css'
import memesData from '../memesData'

export default function Meme(){
    const[memeImage, setMemeImage] = React.useState("")
    const[allMemeImages, setAllMemeImages] = React.useState([])
    const[meme, setMeme] = React.useState({
        bottomText: "",
        topText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(link => setAllMemeImages(link))
    }, [])
    function newImage(){
        console.log("Button Clicked")
        const memesArray = allMemeImages.data.memes
        var index = Math.floor(Math.random() * memesArray.length);
        var url = memesArray[index].url;
        console.log(url)
        setMeme(prevState => ({
            ...prevState,
            randomImage:url
        }

        )
        )
    }
    function handleChange(event){
       const {name, value}= event.target
        setMeme(prevState=> ({
            ...prevState,
            [name] : value
        })
        )
        console.log(meme)
    }
    return (
    <main>
        <div className='form'>
            <input 
            type= "text" 
            placeholder="Top Text"
            className='input--box' 
            name="topText"
            value={meme.topText}
            onChange={handleChange}
        />

        <input 
            type= "text" 
            placeholder="Bottom Text"
            className='input--box'
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            />

        <button 
            onClick={newImage} 
            className='new--image--button'>
            Get a new meme image 🖼
            </button>
        </div>
        <div  className="meme">
        <img src = {meme.randomImage} className="meme--image" />
        <h2 
        className="meme--text top">{meme.topText}</h2>

        <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    </main>
    
    )
}