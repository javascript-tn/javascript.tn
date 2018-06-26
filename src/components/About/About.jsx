import React, { Component } from "react";
const pStyle = {
  fontSize: '20px',
  
  direction: 'rtl'
};
class About extends Component {
  render() {
    return (
      <div className="about">

        <p style={pStyle}>

        السلام عليكم و مرحبا بيكم،
        باش نحاولو من خلال الموقع هذا نعرفوكم على لغة البرمجة Javascript باسلوب مبسط و بلهجتنا التونسية 
        </p>
        <p style={pStyle}>
        لشكون الموقع هذا ؟ مبدئيا للمبتدئين في البرمجة 
 حاليا باش نركزو على أبجديات البرمجة ب javascript ، ترجمة بعض المقالات و التعريف أو شرح بعض البرامج 
 
        </p>
        
        <p style={pStyle}>
        شنوا لازم باش نتعلم ؟ PC و معرفة بل HTML و CSS
        </p>
        <p style={pStyle}>
        باش تنصحني آخر ؟ تعلم الإنجليزية و تنسى الموقع هذا :)
        </p>
        <p style={pStyle}>
        مرحبا باقتراحاتكم و  بأي واحد يحب يساهم  في  هذا الموقع و إلا فما أخطاء يصلحها  ينجم  يتصل بيا عن طريق  التويتر  أو  الإيميل 
        </p>
      </div>
    );
  }
}

export default About;
