import NavBar from './NavBar'

const Layout = props => {
    return (
        <div>
            <div id={"bg"}/>
            <NavBar/>
            {props.children}
            <style jsx>{`
                #bg {
                    @include vendor('transform', 'scale(1.0)');
                    -webkit-backface-visibility: hidden;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    z-index: -1;
                    @include vendor('transform', 'scale(1.125)');
                    @include vendor('transition', (
                        'transform #{_duration(article)} ease-in-out',
                        'filter #{_duration(article)} ease-in-out'
                    ));
                    background-image:		url('/resources/kaart.jpeg');
                    background-position:	center;
                    background-size:		cover;
                    background-repeat:		no-repeat;
                    opacity: 0.5;
                }
            `}</style>
        </div>
    )
};

export default Layout;