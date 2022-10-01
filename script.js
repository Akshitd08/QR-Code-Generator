const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
    e.preventDefault();

    clearQR();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;
    console.log(url, size);
    generateQRCode(url, size);
    setTimeout(() => {
        const saveUrl = qr.querySelector('img').src;
        SaveBtn(saveUrl );
    }
    , 50);
    
    
}
form.addEventListener('submit', onGenerateSubmit);

const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size,
    });
};

const clearQR = () => {
    qr.innerHTML = '';
    const saveLink = document.getElementById('save-link');
    if(saveLink) saveLink.remove();
}

const SaveBtn = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = 'Save Image';
    document.getElementById('generated').appendChild(link);
};