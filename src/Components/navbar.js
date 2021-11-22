import './Components.css'

const Navbar = () => {
    return ( 
        <nav class="navbar navbar-expand-lg d-flex sticky-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src='https://res.cloudinary.com/casinogrounds/image/upload/v1628427051/reactapp/cg-next/cg-logo.svg' alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse text-center justify-content-center" id="navbarNav">
                <ul class="navbar-nav text-center">
                    <li class="nav-item">
                    <a class="nav-link" href="#">HOME</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#" aria-current="page">CASINOS</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">BONUSES</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#k">FORUM</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">SLOTS</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">STREAMERS</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">GAMES</a>
                    </li>
                </ul>
                </div>
            </div>
            <form class="justify-content-end">
                    <button class="btn me-2" type="button">SIGN IN</button>
            </form>
        </nav>
     );
}
 
export default Navbar;