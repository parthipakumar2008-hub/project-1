document.addEventListener('DOMContentLoaded', () => {
    const select1 = document.getElementById('select1');
    const select2 = document.getElementById('select2');
    const compareBtn = document.getElementById('compareBtn');
    const resultDiv = document.getElementById('compareResult');

    // Populate dropdowns
    products.forEach(p => {
        const option1 = document.createElement('option');
        option1.value = p.id;
        option1.textContent = p.name;
        select1.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = p.id;
        option2.textContent = p.name;
        select2.appendChild(option2);
    });

    compareBtn.addEventListener('click', () => {
        const id1 = select1.value;
        const id2 = select2.value;

        if (!id1 || !id2) {
            alert('Please select two devices to compare.');
            return;
        }

        const p1 = products.find(p => p.id === id1);
        const p2 = products.find(p => p.id === id2);

        renderComparison(p1, p2);
    });

    function renderComparison(p1, p2) {
        resultDiv.style.display = 'block';

        // Find common spec keys
        const allKeys = new Set([...Object.keys(p1.specs), ...Object.keys(p2.specs)]);

        let rowsHtml = '';
        allKeys.forEach(key => {
            rowsHtml += `
            <tr style="border-bottom: 1px solid var(--border-color);">
                <td style="padding: 1rem; color: var(--text-muted); text-transform: capitalize;">${key}</td>
                <td style="padding: 1rem; font-weight: 500;">${p1.specs[key] || '-'}</td>
                <td style="padding: 1rem; font-weight: 500;">${p2.specs[key] || '-'}</td>
            </tr>
            `;
        });

        resultDiv.innerHTML = `
            <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; background: var(--bg-card); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-md);">
                    <thead>
                        <tr style="background: var(--bg-body); text-align: left;">
                            <th style="padding: 1.5rem; width: 20%;">Feature</th>
                            <th style="padding: 1.5rem; width: 40%;">
                                <img src="../${p1.image}" style="width: 60px; height: 60px; object-fit: contain; margin-bottom: 0.5rem;" onerror="this.src='https://placehold.co/60x60'">
                                <div>${p1.name}</div>
                                <div style="color: var(--primary-color);">${formatCurrency(p1.price)}</div>
                            </th>
                            <th style="padding: 1.5rem; width: 40%;">
                                <img src="../${p2.image}" style="width: 60px; height: 60px; object-fit: contain; margin-bottom: 0.5rem;" onerror="this.src='https://placehold.co/60x60'">
                                <div>${p2.name}</div>
                                <div style="color: var(--primary-color);">${formatCurrency(p2.price)}</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rowsHtml}
                        <tr>
                            <td style="padding: 1rem; color: var(--text-muted);">Action</td>
                            <td style="padding: 1rem;"><a href="review.html?id=${p1.id}" class="btn btn-outline" style="width: 100%;">View Review</a></td>
                            <td style="padding: 1rem;"><a href="review.html?id=${p2.id}" class="btn btn-outline" style="width: 100%;">View Review</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }
});
