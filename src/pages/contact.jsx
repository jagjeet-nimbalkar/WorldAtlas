export default function Contact(){
    const handleFormSubmit=(FormData)=>{
        // console.log(FormData.entries())
        const formInputData=Object.fromEntries(FormData.entries())
        console.log(formInputData)
    };
    return(
        <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>
        <div className="contact-wrapper container">
          <form onSubmit={handleFormSubmit}>
            <input 
              type="text" 
              required 
              autoComplete="off" 
              placeholder="Enter your name" 
              name="username" 
              className="form-control" 
            />
            <input 
              type="email" 
              required 
              autoComplete="off" 
              placeholder="Enter your email" 
              name="email" 
              className="form-control" 
            />
            <textarea 
              name="message" 
              required 
              autoComplete="off" 
              className="form-control" 
              placeholder="Type your message here" 
              rows={5}
            ></textarea>
            <button type="submit" className="submit-btn">Send</button>
          </form>
        </div>
      </section>
      
    )
}