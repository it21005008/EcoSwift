import newsbanner from '../assets/images/newsheader.png';

export default function News() {
  return (
    
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '100vh' }}>
      <div>
        
        <img src={newsbanner} width={2000} height={2000}></img>
        
        <div style={{ textAlign: 'center' }}>
          <p>OUR LATEST NEWS</p>
        </div>
        


        

      </div>

      
      
    </div>
  );
}
