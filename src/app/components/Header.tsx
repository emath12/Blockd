import Button from "./Button";

function Header() {

    return (
        <header className="bg-sky-950 opacity-98 shadow-lg shadow-black p-6">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-white text-3xl p-4 font-bold">Blockd: Blockify Your Life</div>
                <nav>
                    <Button 
                        text="About"
                    />

                    <Button 
                        text="Meet Me"
                    />
                </nav>
            </div>
        </header>
    )
}

export default Header;