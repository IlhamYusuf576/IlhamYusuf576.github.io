const baseURL = "https://emsifa.github.io/api-wilayah-indonesia/api/";

const provinsiSelect = document.getElementById("provinsi");
const kabupatenSelect = document.getElementById("kabupaten");
const kecamatanSelect = document.getElementById("kecamatan");
const desaSelect = document.getElementById("desa");

// Fetch Provinsi
fetch(baseURL + "provinces.json")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((provinsi) => {
            const option = document.createElement("option");
            option.value = provinsi.id;
            option.textContent = provinsi.name;
            provinsiSelect.appendChild(option);
        });
    })
    .catch((error) => console.error("Error fetching provinces:", error));

// Fetch Kabupaten/Kota
provinsiSelect.addEventListener("change", () => {
    kabupatenSelect.innerHTML = `<option value="">Pilih Kabupaten/Kota</option>`;
    kecamatanSelect.innerHTML = `<option value="">Pilih Kecamatan</option>`;
    desaSelect.innerHTML = `<option value="">Pilih Desa</option>`;

    const provinsiId = provinsiSelect.value;
    if (!provinsiId) return;

    fetch(baseURL + `regencies/${provinsiId}.json`)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((kabupaten) => {
                const option = document.createElement("option");
                option.value = kabupaten.id;
                option.textContent = kabupaten.name;
                kabupatenSelect.appendChild(option);
            });
        })
        .catch((error) => console.error("Error fetching regencies:", error));
});

// Fetch Kecamatan
kabupatenSelect.addEventListener("change", () => {
    kecamatanSelect.innerHTML = `<option value="">Pilih Kecamatan</option>`;
    desaSelect.innerHTML = `<option value="">Pilih Desa</option>`;

    const kabupatenId = kabupatenSelect.value;
    if (!kabupatenId) return;

    fetch(baseURL + `districts/${kabupatenId}.json`)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((kecamatan) => {
                const option = document.createElement("option");
                option.value = kecamatan.id;
                option.textContent = kecamatan.name;
                kecamatanSelect.appendChild(option);
            });
        })
        .catch((error) => console.error("Error fetching districts:", error));
});

// Fetch Desa
kecamatanSelect.addEventListener("change", () => {
    desaSelect.innerHTML = `<option value="">Pilih Desa</option>`;

    const kecamatanId = kecamatanSelect.value;
    if (!kecamatanId) return;

    fetch(baseURL + `villages/${kecamatanId}.json`)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((desa) => {
                const option = document.createElement("option");
                option.value = desa.id;
                option.textContent = desa.name;
                desaSelect.appendChild(option);
            });
        })
        .catch((error) => console.error("Error fetching villages:", error));
});