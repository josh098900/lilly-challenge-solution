async function getMedicines() {
    const response = await fetch('http://localhost:8000/medicines');
    const data = await response.json(); 
    
    // grab the array inside the object
    const medicines = data.medicines; 

    const list = document.getElementById('medicine-list');

    medicines.forEach(medicine => {
        const item = document.createElement('div');

        let nameText;
        if (medicine.name) {
            nameText = medicine.name;
        } else {
            nameText = "unknown medicine";
        
        }

        
        // If a price is null
        let priceText;
        if (medicine.price !== null) {
            priceText = `£${medicine.price}`;
        } else {
            priceText = "Price TBC";
        }

        item.textContent = `${nameText}: ${priceText}`;

        list.appendChild(item)
       
    });
}

getMedicines();


//form handling logic

async function createMedicine(event) {
    event.preventDefault();

    const nameInput = document.getElementById('med-name');
    const priceInput = document.getElementById('med-price');
    const name = nameInput.value;
    const price = priceInput.value;

    
    await fetch('http://localhost:8000/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams ({'name': name, 'price': price})
    });

    nameInput.value = '';
    priceInput.value = '';
                        // here i remembered innerhtml is unsafe due to cross site scripting so changed to safe practice
    document.getElementById('medicine-list').replaceChildren();
    getMedicines()


    }
    
const form = document.getElementById('add-medicine-form');
form.addEventListener('submit', createMedicine);
