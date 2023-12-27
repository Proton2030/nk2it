
import "./videocard.css";

export const VideoCard = () => {
  return (
    <>
      <div  className="card" onClick={() => (document.getElementById('my_modal_1') as HTMLDialogElement)?.showModal()}>
        <div className="card__view">
          <div className="card__view__data">
            <p className="card__view__preview">Preview</p>
            <p className="card__play__icon">
              <svg width="8px" height="8px" viewBox="-0.5 0 7 7" version="1.1">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-347.000000, -3766.000000)" fill="#000000">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path fill="#EAECEE" d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322" id="play-[#1003]"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </p>
            <p className="card__lenght">10:19</p>
          </div>
        </div>
        <div className="card__content">
          <p className="channel__video__name">NK2IT is a leading System Integrator (SI) based in Sydney, Australia.</p>
          <div className="channel__data">
            <div className="channel__img"></div>
            <div className="channel__data__text">
              <p className="channel__name">NK2IT Pty Ltd</p>
              <div className="channel__subdata">
                <p className="channel__views">519.7K Views</p>
                <p className="channel__date">3 months ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>


<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
  <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">x</button>
      </form>
    </div>
    <div className="modal-action">
    <div  className="mockup-browser border border-base-300 ">
  <div className="mockup-browser-toolbar">
    <div className="input border border-base-300">https://www.youtube.com/embed/7lcq1xNorrM</div>
  </div>
  <div className="flex justify-center  border-t border-base-300">
  <iframe className='w-[30rem] h-[20rem]'  src="https://www.youtube.com/embed/7lcq1xNorrM" title="NK2IT - Help Desk Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  </div>
</div>
    </div>
  </div>
</dialog>
    </>
  )
}
