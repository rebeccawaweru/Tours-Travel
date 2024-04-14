// import { useEffect } from "react";
// // Google Translate component
// const GoogleTranslate = () => {
//     useEffect(() => {
//         // Load the Google Translate script
//         const script = document.createElement('script');
//         script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//         script.async = true;
//         document.body.appendChild(script);

//         // Define the initialization function
//         window.googleTranslateElementInit = function() {
//             new window.google.translate.TranslateElement(
//                 { pageLanguage: 'en', autoDisplay: false },
//                 'google_translate_element'
//             );
//         };

//         // Cleanup function to remove the script when the component is unmounted
//         return () => {
//             document.body.removeChild(script);
//         };
//     }, []);

//     // Function to handle the button click and display the Google Translate menu
//     const handleTranslateClick = () => {
//         const translateElement = document.getElementById('google_translate_element');
//         if (translateElement) {
//             // Simulate a click event on the Google Translate dropdown
//             const translateDropdown = translateElement.querySelector('.goog-te-menu-value');
//             if (translateDropdown) {
//                 translateDropdown.click();
//             }
//         }
//     };
  
//     // The div where Google Translate will be injected
//     return (
//         <div>
//         {/* Google Translate element (hidden) */}
//         <div id="google_translate_element" style={{ display: 'none' }}></div>
//         {/* Button to trigger the translation */}
//         <button onClick={handleTranslateClick}>Translate</button>
//     </div>
//     )
//   };

//   export default GoogleTranslate