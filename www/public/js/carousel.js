class Carousel
{

    /**
     * @param {HTMLElement} element
     * @param {Object} options
     * @param {Object} [options.slidesToScroll=1] Number elements to scroll
     * @param {Object} [options.slidesVisible=1] Number elements visible
     * @param {boolean} [options.infinite=false] Allow to loop at infinite.
     * @param {boolean} [options.loop=false] Allow to loop to end of carousel length
     */
    constructor(element, options = {}) {
        console.log('Hello');
        this.element = element;

        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1,
            infinite: false,
            loop: false
        }, options);

        let children = [].slice.call(element.children);
        this.isMobile = false;
        this.currentItem = 0;

        // DOM modification
        this.root = this.createDivWithClass('carousel');
        this.carouselContainer = this.createDivWithClass('carousel-container');
        this.root.setAttribute('tabindex', '0');
        this.root.appendChild(this.carouselContainer);
        this.element.appendChild(this.root);
        this.moveCallbacks = [];

        this.carouselItems = children.map((child) => {
            let carouselItem = this.createDivWithClass('carousel-item');
            carouselItem.appendChild(child);

            return carouselItem;
        });
        if (this.options.infinite) {
            this.offset = this.options.slidesVisible * 2 - 1;
            this.carouselItems = [
                ...this.carouselItems.slice(this.carouselItems.length - this.offset).map(carouselItem => carouselItem.cloneNode(true)),
                ...this.carouselItems,
                ...this.carouselItems.slice(0, this.offset).map(carouselItem => carouselItem.cloneNode(true))
            ]
            this.goToItem(this.offset, false);
        }
        this.carouselItems.forEach(carouselItem => this.carouselContainer.appendChild(carouselItem));
        this.setStyle();
        this.createNavigation();

        // Events
        this.moveCallbacks.forEach(callback => callback(this.currentItem));
        this.onWindowResize();

        window.addEventListener('resize', this.onWindowResize.bind(this));
        if (this.options.infinite) this.carouselContainer.addEventListener('transitionend', this.resetInfinite.bind(this));
    }

    /**
     * Set the dimensions carousel items for responsive
     */
    setStyle() {
        let ratio = this.carouselItems.length / this.slidesVisible;
        this.carouselContainer.style.width = (ratio * 100) + "%";
        this.carouselItems.forEach(carouselItem => carouselItem.style.width = ((100 / this.slidesVisible) / ratio ) + "%");
    }

    createNavigation() {
        let chevronRight = document.createElement('i');
        chevronRight.setAttribute('class', 'fa fa-chevron-right fa-lg');
        let chevronLeft = document.createElement('i');
        chevronLeft.setAttribute('class', 'fa fa-chevron-left fa-lg');
        let nextButton = this.createDivWithClass('button-next');
        let prevButton = this.createDivWithClass('button-prev');
        nextButton.appendChild(chevronRight);
        prevButton.appendChild(chevronLeft);
        this.root.appendChild(nextButton);
        this.root.appendChild(prevButton);

        nextButton.addEventListener('click', this.next.bind(this));
        prevButton.addEventListener('click', this.prev.bind(this));

        if (this.options.loop === true) return;
        this.onMoveItem(index => {
            index === 0 ? prevButton.classList.add('button-prev-hidden') : prevButton.classList.remove('button-prev-hidden');
            this.carouselItems[this.currentItem + this.slidesVisible] === undefined
                ? nextButton.classList.add('button-next-hidden')
                : nextButton.classList.remove('button-next-hidden');
        })
    }

    next () {
        this.goToItem(this.currentItem + this.slidesToScroll);
    }

    prev () {
        this.goToItem(this.currentItem - this.slidesToScroll);
    }

    /**
     *
     * @param {number} index
     * @param {boolean} [animation=true]
     */
    goToItem(index, animation = true) {
        if (index < 0) {
            index = this.carouselItems.length - this.options.slidesVisible;
        } else if (index >= this.carouselItems.length || (this.carouselItems[this.currentItem + this.options.slidesVisible] === undefined && index > this.currentItem)) {
            index = 0;
        }
        let translateX = index * -100 / this.carouselItems.length;
        if (animation === false) {
            this.carouselContainer.style.transition = 'none';
        }
        this.carouselContainer.style.transform = 'translate3d(' + translateX + '%, 0, 0)';
        this.carouselContainer.offsetHeight;
        if (animation === false) {
            this.carouselContainer.style.transition = '';
        }
        this.currentItem = index;

        this.moveCallbacks.forEach(callback => callback(index));
    }

    resetInfinite() {
        if (this.currentItem <= this.options.slidesToScroll) {
            this.goToItem(this.currentItem + (this.carouselItems.length - 2 * this.offset), false);
        } else if (this.currentItem >= this.carouselItems.length - this.offset) {
            this.goToItem(this.currentItem - (this.carouselItems.length - 2 * this.offset), false);
        }
    }


    /**
     *
     * @param callback Call moveCallbacks array
     */
    onMoveItem(callback) {
        this.moveCallbacks.push(callback);
    }

    onWindowResize() {
        let mobile = window.innerWidth < 800;
        if (mobile !== this.isMobile) {
            this.isMobile = mobile;
            this.setStyle();
            this.moveCallbacks.forEach(callback => callback(this.currentItem));
        }
    }

    /**
     * @param {string} className
     * @return {HTMLElement}
     */
    createDivWithClass(className) {
        let div = document.createElement('div');
        div.setAttribute('class', className);

        return div;
    }

    /**
     *
     * @return {number}
     */
    get slidesToScroll() {
        return this.isMobile ? 1 : this.options.slidesToScroll;
    }

    /**
     * @return {number}
     */
    get slidesVisible() {
        return this.isMobile ? 1 : this.options.slidesVisible;
    }

}

window.addEventListener('load', function () {
    new Carousel(document.getElementById('carousel-comments'), {
        slidesToScroll: 1,
        slidesVisible: 3,
        infinite: true
    });
});
