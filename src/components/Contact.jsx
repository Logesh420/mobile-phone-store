export default function Contact(){
  return(
    <div style={styles.box}>
      <h2>Contact Us</h2>
      <p>📍 Chennai, Tamil Nadu</p>
      <p>📞 +91 98765 43210</p>
      <p>📧 mobilestore@gmail.com</p>
      <input placeholder="Your Name"/>
      <input placeholder="Email"/>
      <textarea placeholder="Message"/>
      <button>Send</button>
    </div>
  )
}

const styles={box:{maxWidth:400,margin:"50px auto",display:"flex",flexDirection:"column",gap:10}};
