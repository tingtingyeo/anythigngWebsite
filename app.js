document.addEventListener('DOMContentLoaded', function() {
    // Add animated heading
    const header = document.querySelector('.header');
    if (header) {
        header.innerHTML = 'Anythingg Tourism Agency <span class="wave">🌴</span>';
    }
    // No button for opening chatbot in new tab
});

function openHuggingFaceChatbot() {
    window.open('https://huggingface.co/spaces/tingtingyeo/flowise', '_blank');
}

function sendMessageToHuggingFace(message) {
    const iframe = document.querySelector('#huggingface-container iframe');
    if (iframe) {
        // Example: postMessage to the iframe (works only if the Hugging Face Space supports it)
        iframe.contentWindow.postMessage(message, '*');
    }
}

// Hugging Face API integration
async function queryHuggingFace(data) {
    // TODO: Replace YOUR_SPACE and YOUR_CHATFLOW_ID with your actual values
    const response = await fetch(
        "https://tingtingyeo-flowise.hf.space/api/v1/prediction/YOUR_CHATFLOW_ID",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );
    const result = await response.json();
    return result;
}
// Example usage:
// queryHuggingFace({ question: "What is the best time to visit Singapore?" }).then(console.log);
