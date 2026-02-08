document.addEventListener('DOMContentLoaded', () => {
    renderTrending();
    renderLatest();
    renderBudget('all');

    // Budget Filter Click Handlers
    const filterBtns = document.querySelectorAll('.btn-outline');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active-filter'));
            filterBtns.forEach(b => b.classList.remove('btn-primary'));
            if (!b.classList.contains('btn-outline')) b.classList.add('btn-outline');

            // Add active to clicked
            e.target.classList.add('active-filter');
            e.target.classList.remove('btn-outline');
            e.target.classList.add('btn-primary');

            const filterText = e.target.innerText;
            renderBudget(filterText);
        });
    });
});

function createProductCard(product) {
    const whatsappMsg = `Hi, I want to order ${product.name} priced at ${formatCurrency(product.price)}.`;
    const whatsappLink = `https://wa.me/916381611551?text=${encodeURIComponent(whatsappMsg)}`;

    return `
    <div class="card" style="height: 100%; display: flex; flex-direction: column;">
        <div style="position: relative;">
            <a href="pages/review.html?id=${product.id}">
                <img src="${product.image}" alt="${product.name}" class="card-image" onerror="this.src='https://placehold.co/400x300?text=No+Image'">
            </a>
            <span class="badge" style="position: absolute; top: 1rem; left: 1rem; background: rgba(255,255,255,0.9); color: var(--primary-color); backdrop-filter: blur(4px); box-shadow: var(--shadow-sm);">${product.brand}</span>
            ${product.price > 50000 ? '<span class="badge" style="position: absolute; top: 1rem; right: 1rem; background: var(--accent-color); color: white;">Premium</span>' : ''}
        </div>
        
        <div class="card-body" style="flex: 1; display: flex; flex-direction: column;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
               <a href="pages/review.html?id=${product.id}" style="flex: 1;">
                    <h3 style="font-size: 1.25rem; margin-bottom: 0.25rem; font-weight: 700; color: var(--text-main); line-height: 1.3;">${product.name}</h3>
                </a>
                <div style="display: flex; align-items: center; gap: 0.25rem; color: #fbbf24; font-weight: 700; font-size: 0.9rem; background: #fffbeb; padding: 0.2rem 0.5rem; border-radius: 1rem;">
                    <i class="ri-star-fill"></i> ${product.rating}
                </div>
            </div>
            
            <div style="flex: 1;">
                <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1rem; display: flex; gap: 1rem; align-items: center;">
                    ${product.specs.processor ? `<span title="Processor"><i class="ri-cpu-line" style="color: var(--primary-color);"></i> ${product.specs.processor.split(' ')[0]}</span>` : ''}
                    ${product.specs.camera ? `<span title="Camera"><i class="ri-camera-lens-line" style="color: var(--secondary-color);"></i> ${product.specs.camera.split('+')[0]}</span>` : ''}
                </p>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
                    ${product.tags ? product.tags.slice(0, 2).map(tag => `<span style="font-size: 0.75rem; padding: 0.25rem 0.75rem; background: var(--bg-soft); color: var(--primary-dark); border-radius: 20px; font-weight: 600; text-transform: capitalize;">${tag}</span>`).join('') : ''}
                </div>
            </div>

            <div class="flex justify-between items-center" style="margin-top: auto; padding-top: 1rem; border-top: 1px dashed var(--border-color); gap: 10px;">
                <div style="display: flex; flex-direction: column;">
                    <span style="font-size: 0.8rem; color: var(--text-muted);">Price</span>
                    <span style="font-weight: 800; font-size: 1.25rem; color: var(--primary-dark);">${formatCurrency(product.price)}</span>
                </div>
                <a href="${whatsappLink}" target="_blank" class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.9rem; border-radius: 0.75rem; flex: 1; text-align: center;">
                    Order Now <i class="ri-whatsapp-line" style="margin-left: 5px;"></i>
                </a>
            </div>
        </div>
    </div>
    `;
}

function renderTrending() {
    const container = document.getElementById('trendingGrid');
    if (!container) return;

    // Show all trending, or fallback to first 4 products if no specific trending tags
    let trending = products.filter(p => p.tags && p.tags.includes('trending'));
    if (trending.length === 0) trending = products.slice(0, 4);

    container.innerHTML = trending.map(createProductCard).join('');
}

function renderLatest() {
    const container = document.getElementById('latestGrid');
    if (!container) return;

    // Show all products in "Latest" for now to satisfy "Show all laptop and phone" request
    // Or just a larger slice
    const latest = products;

    container.innerHTML = latest.map(createProductCard).join('');
}

function renderBudget(filter) {
    const container = document.getElementById('budgetGrid');
    if (!container) return;

    let filtered = products;

    if (filter.includes('10,000')) {
        filtered = products.filter(p => p.price <= 10000);
    } else if (filter.includes('15,000')) {
        filtered = products.filter(p => p.price <= 15000);
    } else if (filter.includes('20,000')) {
        filtered = products.filter(p => p.price <= 20000);
    } else if (filter.includes('Premium')) {
        filtered = products.filter(p => p.price > 20000);
    } else {
        // Default show all if no specific filter match, or specific logic
        // The user asked for "Top big budges", maybe they meant "Top Budget" sections to work.
        // Let's just show everything sorted by price if "all" or specific range not matched is safer?
        // Actually, let's make the default view (on load) show a mix or all below a certain threshold.
        // But the user said "all laptop and phone show".
        // Let's just return all products if filter is 'all' or unrecognized, to be safe.
        filtered = products;
    }

    if (filtered.length === 0) {
        container.innerHTML = `<p style="color: var(--text-muted); grid-column: 1/-1; text-align: center;">No products found in this range.</p>`;
        return;
    }

    container.innerHTML = filtered.map(createProductCard).join('');
}
