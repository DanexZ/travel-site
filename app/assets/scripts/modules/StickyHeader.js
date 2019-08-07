import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor(){
        this.header = $('.site-header');
        this.headerTriggerElement = $('.large-hero__title');
        this.pageSections = $('.page-section');
        this.headerLinks = $('.primary-nav a');
        this.lazyImages = $('.lazyload');
        this.refreshWayPoints();
        this.addSmoothScrolling();
        this.createHeaderWaypoint();
        this.createPageSectionWaypoints();
    }

    refreshWayPoints(){
        this.lazyImages.on('load', function(){
            Waypoint.refreshAll();
        });
    }

    addSmoothScrolling(){
        this.headerLinks.smoothScroll();
    }

    createHeaderWaypoint(){
        var that = this;

        new Waypoint({
            element: that.headerTriggerElement[0],
            handler: function(direction){
                if(direction == 'down'){
                    $(that.header).addClass('site-header--dark');
                } else {
                    $(that.header).removeClass('site-header--dark');
                }
            },
        });
    }

    createPageSectionWaypoints(){
        var that = this;

        this.pageSections.each(function(){
            var currentPageSection = this;

            new Waypoint({
                element: currentPageSection,
                handler: function(direction){
                    if(direction == 'down'){
                        var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
                        that.headerLinks.removeClass('is-current-link');
                        $(matchingHeaderLink).addClass('is-current-link');
                    }
                },
                ofsset: "12%"
            });

            new Waypoint({
                element: currentPageSection,
                handler: function(direction){
                    if(direction == 'up'){
                        var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
                        that.headerLinks.removeClass('is-current-link');
                        $(matchingHeaderLink).addClass('is-current-link');
                    }
                },
                ofsset: "-40%"
            });
        });
    }
}

export default StickyHeader;