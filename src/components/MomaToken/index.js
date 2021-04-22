import imgMoma from 'assets/img/img-moma.png';
import './style.css';

export default function MomaToken() {
  return (
    <div className='moma-token'>
      <div className='container'>
        <div className='title-section'>
          <h1 className='big-title'>
            The <b>$MOMA</b> Token
          </h1>
        </div>
        <div className='conten-moma-token'>
          <div className='img-moma'>
            <img src={imgMoma} alt='img-moma' />
          </div>

          <div className='desciption-moma'>
            <div className='title-description'>Governance and community involvement</div>
            <div className='text-description'>
              The $MOMA governance token was designed to incentivize ecosystem participants to
              contribute to developing the Mochi Ecosystem. <br />
              <br />
              $MOMA token holders will be able to vote for the governance decisions of MochiLab,
              such as the selection of the suitable platforms for cross-chain tokens, game
              development SDKs to be integrated into the Mochi ecosystem, or having a say in the
              roadmap of Mochi.Market.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
