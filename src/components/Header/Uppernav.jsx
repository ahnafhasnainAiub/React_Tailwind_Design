
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
function Uppernav() {
  return (
    <>
        <div class="bg-[#002B4F] ">
              <div class="container mx-auto">
  
                  <div class="text-white flex flex-wrap justify-between align-middle p-1">
                      <div class="flex gap-2">
                      
                          <a href="" class=" text-xs lg:text-sm">
                          <FontAwesomeIcon icon={faPhone} />
                              +880 1750 02040</a>
  
                          <a href="" class=" text-xs lg:text-sm">
                          <FontAwesomeIcon icon={faEnvelope} />
                              contact@mediusware.com</a>
        
                      </div>
                      
                      <ul class="flex justify-end gap-3 ">
                          <li>
                            <FontAwesomeIcon icon={faWhatsapp} />
                          </li>
                           <li>
                             <FontAwesomeIcon icon={faFacebook} />
                          </li>
                          <li>
                             <FontAwesomeIcon icon={faLinkedin} />
                          </li> 
                      </ul>
                  </div>
              </div>
        </div>
    
    </>
  )
}

export default Uppernav