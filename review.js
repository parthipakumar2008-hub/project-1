document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const container = document.getElementById('productContent');

    if (!productId) {
        container.innerHTML = `<h2>Product not specified</h2><a href="../index.html" class="btn btn-primary">Go Home</a>`;
        return;
    }

    const product = products.find(p => p.id === productId);

    if (!product) {
        container.innerHTML = `<h2>Product not found</h2><a href="../index.html" class="btn btn-primary">Go Home</a>`;
        return;
    }

    document.title = `${product.name} Review | Parthi Gadget`;

    // Render
    const specsHtml = Object.entries(product.specs).map(([key, value]) => `
        <div style="display: flex; justify-content: space-between; padding: 0.75rem 0; border-bottom: 1px solid var(--border-color);">
            <span style="text-transform: capitalize; color: var(--text-muted);">${key}</span>
            <span style="font-weight: 500;">${value}</span>
        </div>
    `).join('');

    const prosHtml = product.pros.map(pro => `
        <li style="display: flex; align-items: center; gap: 0.5rem; color: #10b981; margin-bottom: 0.5rem;">
            <i class="ri-check-circle-fill"></i> ${pro}
        </li>
    `).join('');

    const consHtml = product.cons.map(con => `
        <li style="display: flex; align-items: center; gap: 0.5rem; color: #f43f5e; margin-bottom: 0.5rem;">
            <i class="ri-close-circle-fill"></i> ${con}
        </li>
    `).join('');

    container.innerHTML = `
        <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 4rem;">
            <!-- Left: Image -->
            <div>
                <img src="../${product.image}" alt="${product.name}" style="width: 100%; border-radius: var(--radius-lg); background-color: var(--bg-card); padding: 2rem; border: 1px solid var(--border-color);" onerror="this.src='https://placehold.co/600x600?text=No+Image'">
                
                <div style="margin-top: 2rem;">
                    <h3>Best For</h3>
                    <div class="flex gap-4" style="flex-wrap: wrap; margin-top: 1rem;">
                        ${product.bestFor.map(tag => `<span class="badge badge-new">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
            
            <!-- Right: Details -->
            <div>
                <div style="margin-bottom: 1rem;">
                    <span class="badge badge-hot" style="margin-bottom: 0.5rem;">${product.category}</span>
                    <h1 style="font-size: 2.5rem; line-height: 1.1;">${product.name}</h1>
                    <div style="display: flex; align-items: center; gap: 1rem; margin-top: 1rem;">
                        <span style="font-size: 1.5rem; font-weight: 700; color: var(--primary-color);">${formatCurrency(product.price)}</span>
                        <div style="display: flex; align-items: center; gap: 0.25rem; color: #fbbf24; font-weight: 600;">
                            <i class="ri-star-fill"></i> ${product.rating} / 5
                        </div>
                    </div>
                </div>
                
                <div style="margin-bottom: 2rem;">
                    <p style="color: var(--text-muted); font-size: 1.1rem;">
                        The ${product.name} is a top-tier device from ${product.brand} offering exceptional performance and build quality.
                    </p>
                </div>
                
                <div class="flex gap-4" style="margin-bottom: 3rem; flex-direction: column;">
                    <a href="https://wa.me/916381611551?text=Hi,%20I%20want%20to%20order%20${encodeURIComponent(product.name)}%20priced%20at%20${formatCurrency(product.price)}" target="_blank" class="btn btn-primary" style="width: 100%; justify-content: center; font-size: 1.1rem; padding: 1rem;">
                        <i class="ri-whatsapp-fill" style="margin-right: 0.5rem; font-size: 1.5rem;"></i> Order via WhatsApp
                    </a>
                    <a href="tel:6381611551" class="btn btn-outline" style="width: 100%; justify-content: center; border-color: var(--primary-color);">
                        <i class="ri-phone-fill" style="margin-right: 0.5rem;"></i> Call to Order: 6381-611-551
                    </a>
                </div>
                
                <!-- Specs -->
                <div style="background-color: var(--bg-card); padding: 2rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
                    <h3 style="margin-bottom: 1.5rem;">Key Specifications</h3>
                    ${specsHtml}
                </div>
            </div>
        </div>
        
        <!-- Pros and Cons -->
        <section class="section-padding">
            <h2 style="margin-bottom: 2rem; text-align: center;">Pros & Cons</h2>
            <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                <div style="background-color: rgba(16, 185, 129, 0.1); padding: 2rem; border-radius: var(--radius-lg);">
                    <h3 style="color: #059669; margin-bottom: 1rem;">Why to buy</h3>
                    <ul style="list-style: none;">${prosHtml}</ul>
                </div>
                <div style="background-color: rgba(244, 63, 94, 0.1); padding: 2rem; border-radius: var(--radius-lg);">
                    <h3 style="color: #e11d48; margin-bottom: 1rem;">Things to note</h3>
                    <ul style="list-style: none;">${consHtml}</ul>
                </div>
            </div>
        </section>
    `;
});
