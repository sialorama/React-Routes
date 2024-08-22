import React from 'react'

const Header = () => {
    return (
        <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-clate-500'>Apprendre Avec Jam</span><br />
                <span className='text-clate-700'>React - Routes</span>
            </h1>
        <form>
            <input type="text" placeholder='Recherche ...' className='bg-transparent'/>
        </form>

        </div>
        </header>

    )
}

export default Header