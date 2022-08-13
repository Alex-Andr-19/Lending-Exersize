import React, {useState} from 'react'

import './Posts.css'
import PostItem from '../PostItem/PostItem'

export default function Posts() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            photo: "1.png",
            tag: "Lifestyle",
            title: "Eat Right For Your Exercise Regime",
            author: "Niek Bove",
            date: "April 8, 2018",
            views: "3K",
            content: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        },
        {
            id: 2,
            photo: "2.png",
            tag: "Lifestyle",
            title: "The Look: Perfect Balance",
            author: "Niek Bove",
            date: "April 8, 2018",
            views: "3K",
            content: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        },
        {
            id: 3,
            photo: "3.png",
            tag: "Style",
            title: "Fun Things to Do in Rome",
            author: "Niek Bove",
            date: "April 8, 2018",
            views: "3K",
            content: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        },
        {
            id: 4,
            photo: "4.png",
            tag: "Style",
            title: "24 Colorful Ceilings That Add Unexpected Contrast to Any Room",
            author: "Niek Bove",
            date: "April 8, 2018",
            views: "3K",
            content: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        },
        {
            id: 5,
            photo: "5.png",
            tag: "Lifestyle",
            title: "9 New Songs to Heat Up Your Fall Playlist",
            author: "Niek Bove",
            date: "April 8, 2018",
            views: "3K",
            content: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        },
        {
            id: 6,
            photo: "6.png",
            tag: "Events",
            title: "What You Need on Your Bedside Table",
            author: "Niek Bove",
            date: "April 8, 2018",
            views: "3K",
            content: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        },
        {
            id: 7,
            photo: "7.png",
            tag: "Travel",
            title: "When Two Wheels Are Better Than Four",
            author: "Niek Bove",
            date: "April 8, 2018",
            views: "3K",
            content: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        },
        {
            id: 8,
            photo: "8.png",
            tag: "Travel",
            title: "26 Living Room Ideas from the Homes of Top Designers",
            author: "Niek Bove",
            date: "April 8, 2018",
            views: "3K",
            content: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        },
        {
            id: 9,
            photo: "9.png",
            tag: "Music",
            title: "What Makes Your City’s Style Unique",
            author: "Niek Bove",
            date: "April 8, 2018",
            views: "3K",
            content: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        },
        
      ])
    
  
    return (
        <div className="post-block">
            {
                posts.map(post => <PostItem post={post} key={post.id}/>)
            }
        </div>
    )
}