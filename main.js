let dot = true;

function toggleDot() {
    dot = !dot;
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dotEl, idx) => {
        if ((dot && idx === 0) || (!dot && idx === 1)) {
            dotEl.classList.add('active');
        } else {
            dotEl.classList.remove('active');
        }
    });
}

function moveRight() {
    const cardsList = document.getElementById('cards-list');
    if (!cardsList || cardsList.children.length === 0) return;
    const lastCard = cardsList.lastElementChild;
    const firstCard = cardsList.firstElementChild;
    cardsList.appendChild(firstCard, lastCard);
    toggleDot();
}

function moveLeft() {
    const cardsList = document.getElementById('cards-list');
    if (!cardsList || cardsList.children.length === 0) return;
    const lastCard = cardsList.lastElementChild;
    const firstCard = cardsList.firstElementChild;
    cardsList.insertBefore(lastCard, firstCard);
    toggleDot();
}

function createCompanyLogo(testimonial) {
    const cardCompanyLogoWrapper = document.createElement('section');
    cardCompanyLogoWrapper.classList.add('card-company-logo-wrapper');

    const cardCompanyLogo = document.createElement('img');
    cardCompanyLogo.classList.add('card-company-logo');
    cardCompanyLogo.alt = `${testimonial.companyName} logo`;
    cardCompanyLogo.src = testimonial.companyLogo;

    cardCompanyLogoWrapper.appendChild(cardCompanyLogo);
    cardCompanyLogoWrapper.setAttribute('aria-label', `Company logo of ${testimonial.companyName}`);
    return cardCompanyLogoWrapper;
}

function createDivider() {
    const divider = document.createElement('div');
    divider.classList.add('card-divider');
    divider.innerText = '“';
    return divider;
}

function createReview(testimonial) {
    const cardReviewWrapper = document.createElement('section');
    cardReviewWrapper.classList.add('card-review-wrapper');

    const cardReview = document.createElement('div');
    cardReview.classList.add('card-review');
    cardReview.innerText = testimonial.review;

    cardReviewWrapper.appendChild(cardReview);
    cardReviewWrapper.setAttribute('aria-label', `Testimonial from ${testimonial.fullName}`);
    cardReview.append(createDivider());
    return cardReviewWrapper;
}

function createProfilePicture(testimonial) {
    const cardProfilePicture = document.createElement('img');
    cardProfilePicture.classList.add('card-profile-picture');
    cardProfilePicture.src = testimonial.profilePicture;
    cardProfilePicture.alt = `${testimonial.fullName} profile picture`;
    return cardProfilePicture;
}

function createName(testimonial) {
    const cardFullName = document.createElement('div');
    cardFullName.classList.add('card-fullname');
    cardFullName.innerText = testimonial.fullName;
    return cardFullName;
}

function createPosition(testimonial) {
    const cardPosition = document.createElement('div');
    cardPosition.classList.add('card-position');
    cardPosition.innerText = testimonial.position;
    return cardPosition;
}

function createMaskGroup(testimonial) {
    const authorDetails = document.createElement('div');
    authorDetails.classList.add('author-details');
    authorDetails.append(createName(testimonial), createPosition(testimonial));

    const maskGroup = document.createElement('section');
    maskGroup.classList.add('mask-group');
    maskGroup.append(createProfilePicture(testimonial), authorDetails);
    maskGroup.setAttribute('aria-label', `Profile information id ${testimonial.id}`);
    return maskGroup;
}

function createCard(testimonial) {
    const cardWrapper = document.createElement('li');
    cardWrapper.classList.add('card-wrapper');
  
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    cardContainer.append(createCompanyLogo(testimonial), createReview(testimonial), createMaskGroup(testimonial));
    cardWrapper.append(cardContainer);
  
    return cardWrapper;
}

const cardsList = document.getElementById('cards-list');
const HTMLCards = testimonials.map(testimonial => createCard(testimonial));
cardsList.append(...HTMLCards);
