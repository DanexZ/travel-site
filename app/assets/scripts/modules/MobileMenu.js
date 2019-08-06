var $ = require('jquery');

class MobileMenu{
    constructor(){
        this.siteHeader = $('.site-header');
        this.icon = $('.site-header__menu-icon');
        this.content = $('.site-header__menu-content');
        this.events();
    }

    events(){
        this.icon.click(this.toggleMenu.bind(this));
    }

    toggleMenu(){
        this.content.toggleClass('site-header__menu-content--visible');
        this.siteHeader.toggleClass('site-header--is-expanded');
    }
}

export default MobileMenu;