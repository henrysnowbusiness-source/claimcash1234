// offers.js - Your offer database
const offers = [
    {
        id: 'underdog',
        name: 'Underdog Fantasy',
        logo: 'U',
        instantCash: 10,
        bonusBets: 50,
        deposit: 10,
        timeMinutes: 10,
        states: '40+ states',
        rating: 4.8,
        completions: 847,
        description: 'Deposit $10 → Get $10 back from us instantly + $50 in free bets from Underdog',
        instructions: [
            'Click "Claim $10" button below',
            'Sign up for Underdog using our referral link',
            'Deposit $10 (you can withdraw this later)',
            'Take a screenshot of your deposit confirmation',
            'Submit screenshot using the form',
            'Receive $10 via PayPal within 24 hours',
            'Use your $50 bonus bets on Underdog'
        ],
        link: '#signup', // Replace with your actual referral link
        popular: true,
        type: 'sports' // sports, investing, banking
    },
    {
        id: 'prizepicks',
        name: 'PrizePicks',
        logo: 'P',
        instantCash: 10,
        bonusBets: 50,
        deposit: 10,
        timeMinutes: 10,
        states: '43 states',
        rating: 4.9,
        completions: 1203,
        description: 'Deposit $10 → Get $10 back from us instantly + $50 in free picks from PrizePicks',
        instructions: [
            'Click "Claim $10" button below',
            'Sign up for PrizePicks using our link',
            'Deposit $10',
            'Screenshot your deposit confirmation',
            'Submit via our form',
            'Get $10 PayPal in 24 hours',
            'Enjoy your $50 in bonus picks'
        ],
        link: '#signup',
        popular: false,
        type: 'sports'
    },
    {
        id: 'acorns',
        name: 'Acorns Investing',
        logo: 'A',
        instantCash: 15,
        bonusBets: 0,
        realMoney: 20,
        deposit: 5,
        timeMinutes: 15,
        states: 'Nationwide',
        rating: 4.7,
        completions: 624,
        description: 'Invest $5 → Get $15 from us + $20 invested in your account (real money you can withdraw!)',
        instructions: [
            'Click "Claim $15" button below',
            'Sign up for Acorns using our link',
            'Make your first $5 investment',
            'Screenshot confirmation',
            'Submit to us',
            'Get $15 PayPal in 24 hours',
            'Acorns adds $20 to your investment account'
        ],
        link: '#signup',
        popular: false,
        type: 'investing'
    }
];

// Demo user submissions (for tracking purposes in your demo)
const userSubmissions = [];

// Function to render offers
function renderOffers() {
    const offersContainer = document.getElementById('offers-container');
    if (!offersContainer) return;

    offersContainer.innerHTML = offers.map(offer => `
        <div class="offer-card" data-offer-id="${offer.id}">
            ${offer.popular ? '<div class="offer-popular">🔥 MOST POPULAR</div>' : ''}
            <div class="offer-logo">${offer.logo}</div>
            <div class="offer-details">
                <h3>${offer.name}</h3>
                <div class="offer-rewards">
                    <span class="reward-badge reward-instant">⚡ $${offer.instantCash} INSTANT CASH</span>
                    ${offer.bonusBets ? `<span class="reward-badge reward-bonus">🎰 $${offer.bonusBets} BONUS BETS</span>` : ''}
                    ${offer.realMoney ? `<span class="reward-badge reward-instant">💰 $${offer.realMoney} REAL MONEY</span>` : ''}
                </div>
                <p style="color: var(--text-dim); margin: 8px 0;">
                    ${offer.description}
                </p>
                <div class="offer-meta">
                    <span>⏱️ ${offer.timeMinutes} minutes</span>
                    <span>📍 ${offer.states}</span>
                    <span>⭐ ${offer.rating}/5 (${offer.completions} completions)</span>
                </div>
            </div>
            <button class="offer-cta" onclick="openOfferModal('${offer.id}')">Claim $${offer.instantCash} →</button>
        </div>
    `).join('');
}

// Function to open offer modal with instructions
function openOfferModal(offerId) {
    const offer = offers.find(o => o.id === offerId);
    if (!offer) return;

    const modal = document.getElementById('offer-modal');
    const modalContent = document.getElementById('modal-content');
    
    modalContent.innerHTML = `
        <div style="text-align: center; margin-bottom: 24px;">
            <div class="offer-logo" style="display: inline-flex; margin-bottom: 16px;">${offer.logo}</div>
            <h2 style="margin-bottom: 8px;">${offer.name}</h2>
            <p style="color: var(--text-secondary);">Earn $${offer.instantCash} + ${offer.bonusBets ? `$${offer.bonusBets} bonus bets` : `$${offer.realMoney} real money`}</p>
        </div>

        <div style="background: var(--bg-primary); padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h3 style="margin-bottom: 16px; font-size: 18px;">How to Complete This Offer:</h3>
            <ol style="color: var(--text-secondary); line-height: 2; padding-left: 20px;">
                ${offer.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
        </div>

        <div style="display: flex; gap: 12px; justify-content: center;">
            <a href="${offer.link}" target="_blank" class="btn-primary" style="text-decoration: none;">
                Start Offer →
            </a>
            <button onclick="closeOfferModal()" class="btn-secondary">
                Cancel
            </button>
        </div>

        <p style="margin-top: 24px; text-align: center; font-size: 14px; color: var(--text-muted);">
            After completing the offer, submit your screenshot using the form below.
        </p>
    `;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeOfferModal() {
    document.getElementById('offer-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    renderOffers();
});

// Export for other modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { offers, userSubmissions };
}
