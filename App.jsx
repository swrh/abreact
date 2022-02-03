import React, { useState } from './react'

const App = () => {
    const [name, setName] = useState('world')

    return <div>
        <h1>Hello, {name}!</h1>
        <input value={name} onchange={(e) => setName(e.target.value)} />
    </div>
}

export default App
