import Navbar from "./Navbar"
import Footer from "./Footer"

export default function MainContainer({ children }){
    
    return (
    <>
        <Navbar />
        <main className="main-container">{children}</main>
        <Footer />
    </>
    )
}