export interface Article {
    date: string;
    title: string;
    text: string;    
    cardClass: string;
}

export const articles = [
    {
        date: '12 Sep, 2018',
        title: 'Love of learning, art keys to a great year of Gwen',
        text: 'To make your document look professionally produced, Word provides header, footer, cover page, and text box designs',
        cardClass: 'App-card App-card-bg-orange'
    },
    {
        date: '28 Sep, 2018',
        title: 'Curious mind leads the way for Jill',
        text: 'Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme.',
        cardClass: 'App-card App-card-bg-skyblue'
    },
    {
        date: '12 Sep, 2018',
        title: 'Celebrating our volunteers',
        text: 'Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it.',
        cardClass: 'App-card App-card-bg-paleviolet'
    }
];
