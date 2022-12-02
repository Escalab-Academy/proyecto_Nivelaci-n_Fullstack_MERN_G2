const ItemProducts = ({ name, price }) => {
    return `
    <div class="card">
        <img id="test" src="" alt="" class="card__image" />
        <div class="card__body">
            <h2 class="card__b--title">${name}</h2>
            <div class="card__info">
                <p class="card__price">$${price}</p>
                <button class="card__button--buy">
                    <img
                        src="public/assets/iconShop.png"
                        alt=""
                        class="icon"
                    />
                </button>
            </div>
        </div>
    </div>
    `;
};

export { ItemProducts };
