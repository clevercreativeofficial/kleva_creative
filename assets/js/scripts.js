// Loader
$( window ).on( 'load', function ()
{
    $( '#loader' ).fadeOut();
} )

// Copyright
const copyright = new Date().getFullYear();
document.getElementById( 'copyright' ).innerHTML = copyright;

// toggle menu on small devices
document.addEventListener( "DOMContentLoaded", () =>
{
    const navItems = document.getElementById( "navItems" );
    const menuBar = document.getElementById( "menu-bar" );
    const overlay = document.querySelector( ".overlay" );
    const defaultIcon = '<i class="fi fi-rr-bars-staggered text-lg translate-y-0.5"></i>';
    const closeIcon = '<i class="fi fi-rr-cross-small text-lg translate-y-0.5"></i>';

    menuBar.innerHTML = defaultIcon; // Ensure the default icon is set

    menuBar.addEventListener( 'click', () =>
    {
        navItems.classList.toggle( "-translate-x-[750px]" );
        overlay.classList.toggle( "translate-x-[750px]" );

        // Toggle the icon
        if ( navItems.classList.contains( "-translate-x-[750px]" ) )
        {
            menuBar.innerHTML = defaultIcon;
            document.body.style.overflowY = 'auto';
        } else
        {
            menuBar.innerHTML = closeIcon;
            document.body.style.overflowY = 'hidden';
        }
    } );
} );
