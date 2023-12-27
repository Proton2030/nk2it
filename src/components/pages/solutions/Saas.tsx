// import React, { useState } from 'react';

// export const Saas = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   const renderButtons = () => {
//     switch (selectedCategory) {
//       case 'security':
//         return (
//           <>
//             <button className="btn btn-outline btn-info" onClick={() => handleSecurityButtonClick('Sophos')}>
//               Sophos
//             </button>
//             <button className="btn btn-outline btn-info" onClick={() => handleSecurityButtonClick('ESET')}>
//               ESET
//             </button>
//           </>
//         );
//       case 'Ms':
//         return (
//           <>
//             <button className="btn btn-outline btn-info" onClick={() => handleMsButtonClick('Microsoft Office 365')}>
//               Microsoft Office 365
//             </button>
//             <button className="btn btn-outline btn-info" onClick={() => handleMsButtonClick('Microsoft Dynamics')}>
//               Microsoft Dynamics
//             </button>
//             <form>
//               <label>
//                 Name:
//                 <input type="text" name="name" />
//               </label>
//               <label>
//                 Email:
//                 <input type="text" name="email" />
//               </label>
//               <label>
//                 Phone:
//                 <input type="text" name="phone" />
//               </label>
//               <label>
//                 Message:
//                 <textarea name="message" />
//               </label>
//               <button type="submit">Send</button>
//             </form>
//           </>
//         );
//       case 'Backup':
//         return (
//           <>
//             <button className="btn btn-outline btn-info" onClick={() => handleBackupButtonClick('Veeam')}>
//               Veeam
//             </button>
//             <button className="btn btn-outline btn-info" onClick={() => handleBackupButtonClick('Avepoint')}>
//               Avepoint
//             </button>
//             {/* Include a form similar to the MS case if needed */}
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   const handleSecurityButtonClick = (product) => {
//     if (product === 'Sophos') {
//       // Redirect to YouTube
//       window.location.href = 'https://www.youtube.com/';
//     } else if (product === 'ESET') {
//       // Redirect to Facebook
//       window.location.href = 'https://www.facebook.com/';
//     }
//   };

//   const handleMsButtonClick = (product) => {
//     // Implement actions for Microsoft buttons
//   };

//   const handleBackupButtonClick = (product) => {
//     // Implement actions for Backup buttons
//   };

//   return (
//     <div>
//       <div className="md:pt-32">
//         <section className="flex items-center font-poppins dark:bg-gray-800 ">
//           <button className="btn btn-outline btn-info" onClick={() => handleCategoryClick('security')}>
//             Security
//           </button>
//           <button className="btn btn-outline btn-success" onClick={() => handleCategoryClick('Ms')}>
//             MS
//           </button>
//           <button className="btn btn-outline btn-warning" onClick={() => handleCategoryClick('Backup')}>
//             Backup
//           </button>
//         </section>

//         {renderButtons()}
//       </div>
//     </div>
//   );
// };


import React, { useState } from 'react';
import { SaasForm } from '../form/Saas';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const Saas: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const renderButtons = () => {
    switch (selectedCategory) {
      case 'security':
        return (
          <>
          <div className="pl-96">
             <button
              className="btn btn-outline btn-info"
              onClick={() => handleSecurityButtonClick('Sophos')}
            >
              Sophos
            </button>
            <button
              className="btn btn-outline btn-info"
              onClick={() => handleSecurityButtonClick('ESET')}
            >
              ESET
            </button>
          </div>
           
          </>
        );
      case 'Ms':
        return (
          <>
          <div className="pl-96">
              <button
              className="btn btn-outline btn-info"
              onClick={() => handleMsButtonClick('Microsoft Office 365')}
            >
              Microsoft Office 365
            </button>
            <button
              className="btn btn-outline btn-info"
              onClick={() => handleMsButtonClick('Microsoft Dynamics')}
            >
              Microsoft Dynamics
            </button>
          </div>
          
            <SaasForm/>
          </>
        );
      case 'Backup':
        return (
          <>
          <div className="pl-96">
              <button
              className="btn btn-outline btn-info"
              onClick={() => handleBackupButtonClick('Veeam')}
            >
              Veeam
            </button>
            <button
              className="btn btn-outline btn-info"
              onClick={() => handleBackupButtonClick('Avepoint')}
            >
              Avepoint
            </button>
          </div>
          
            <SaasForm/>
            {/* Include a form similar to the MS case if needed */}
          </>
        );
      default:
        return null;
    }
  };

  const handleSecurityButtonClick = (product: string) => {
    if (product === 'Sophos') {
      // Redirect to YouTube
      window.location.href = 'https://partnerportal.sophos.com/en-us/microsite/products/intercept-x-endpoint?partner_referral_id=001j000000MhgiD&partner_name=NK2IT+PTY+LTD';
    } else if (product === 'ESET') {
      // Redirect to Facebook
      window.location.href = 'https://www.eset.com/au/request-business-trial-nk2it/';
    }
  };

  const handleMsButtonClick = (product: string) => {
    // Implement actions for Microsoft buttons
  };

  const handleBackupButtonClick = (product: string) => {
    // Implement actions for Backup buttons
  };

  const handleInputChange = (field: keyof FormData, event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({ ...prevData, [field]: event.target.value }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement form submission logic here
  };

  return (
    <div>
      <div className="md:pt-32">
        <section className="flex gap-5 pl-96 items-center font-poppins dark:bg-gray-800 ">
          <button
            className="btn btn-outline btn-info"
            onClick={() => handleCategoryClick('security')}
          >
            Security
          </button>
          <button className="btn btn-outline btn-success" onClick={() => handleCategoryClick('Ms')}>
            Microsoft
          </button>
          <button
            className="btn btn-outline btn-warning"
            onClick={() => handleCategoryClick('Backup')}
          >
            Backup
          </button>
        </section>
<div className="mt-10">
    {renderButtons()}
</div>
        
      </div>
    </div>
  );
};
