document.addEventListener("DOMContentLoaded", () => {
    const emergencyTab = document.querySelector(".emergencytab");
    const driverName = document.querySelector(".drivername");
    const carNumber = document.querySelector(".carnumber");
    const location = document.querySelector(".location");
    const emergencyList = document.querySelector(".emergency-list");
    const driverObj = [
        {
            'name': 'kofi',
            'carnumber': 'GT-2345',
            'location': 'accra'
        },
        {
            'name': 'kwame',
            'carnumber': 'GT-25432',
            'location': 'kumasi'
        },
        {
            'name': 'John',
            'carnumber': 'GB-9094',
            'location': 'Tema'
        },
    ]
    const receiveEmergency = (driverarray) => {
        emergencyList.innerHTML = '';  // Clear the list before adding new items

        if (true) {
            driverarray.forEach(driver => {
                const listItem = document.createElement('li');
            listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start');

            // Driver Name Section
            const driverInfo = document.createElement('div');
            driverInfo.classList.add('ms-2', 'me-auto');

            const driverName = document.createElement('div');
            driverName.classList.add('fw-bold');
            driverName.textContent = 'Driver Name';
            
            const driverNameSpan = document.createElement('span');
            driverNameSpan.classList.add('drivername');
            driverNameSpan.textContent = driver.name;

            // Car Number Section
            const carNumberDiv = document.createElement('div');
            carNumberDiv.classList.add('fw-bold');
            carNumberDiv.textContent = 'Car Number';

            const carNumberSpan = document.createElement('span');
            carNumberSpan.classList.add('carnumber');
            carNumberSpan.textContent = driver.carnumber;

            // Location Section
            const locationDiv = document.createElement('div');
            locationDiv.classList.add('fw-bold');
            locationDiv.textContent = 'Location';

            const locationSpan = document.createElement('span');
            locationSpan.classList.add('location');
            locationSpan.textContent = driver.location;

            // Append all information to list item
            driverInfo.appendChild(driverName);
            driverInfo.appendChild(driverNameSpan);
            driverInfo.appendChild(carNumberDiv);
            driverInfo.appendChild(carNumberSpan);
            driverInfo.appendChild(locationDiv);
            driverInfo.appendChild(locationSpan);

            listItem.appendChild(driverInfo);

            // Append the list item to the emergency list
            emergencyList.appendChild(listItem);
            });
        }
    }
    receiveEmergency(driverObj);
})