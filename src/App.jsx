
import { motion } from 'framer-motion'
import { useState } from 'react'
import styled from 'styled-components'
import './App.css'


const Yassin=styled(motion.div)`

  background-color: red;
    width: 150px;
    height: 150px;
    margin: 0 auto;
    margin-top: 200px;
`

function App() {
const [click,setClick]=useState(false)
  return (
    <div className="App">
        <Yassin  animate={{x:[0,200,-300,-400,-300,220,0]}}
                 transition={{repeat:Infinity,duration:4}}
         className='exmple'>
    s
        </Yassin>
      
    </div>
  )
}

export default App
