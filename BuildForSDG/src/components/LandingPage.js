import React from 'react'
// eslint-disable-next-line
import '../css/landing-page.scss'
// eslint-disable-next-line
import { useHistory } from 'react-router-dom';
import NavigationBar from "./navbar";
import Foot from "./Foot";



function LandingPage() {

  let history = useHistory();
  function handleClick(event){
      let path ="";
      if(event.target.value === "tutor"){
           path = "/SignUpTutor";
      }else{
           path = "/SignUpStudent";
      }
     
    return history.push(path);
  }


  return (
      <div className="landing-page">
        <NavigationBar />

  <h1 className="welcomePageHeader" >Connecting students <br/>with great tutors</h1>

  <div className='svg-image-mobile'>
     <svg  className="pic" id="b8e8e527-8ae9-42c1-86cd-ac5b5d82d2b9" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="911.60164" height="451.38424" viewBox="0 0 911.60164 451.38424"><path d="M666.90719,666.03923a21.28318,21.28318,0,0,1,0-42.56635H983.042a18.5053,18.5053,0,0,0-16.2373-9.65283H338.41256a30.93217,30.93217,0,0,0-30.89746,30.936,30.95171,30.95171,0,0,0,30.89746,30.936H966.80465a18.506,18.506,0,0,0,16.2373-9.65289Z" transform="translate(-144.19918 -224.30788)" fill="#ccc"/><path d="M983.46178,635.20036H682.89113a1.73741,1.73741,0,0,1,0-3.47481H983.46178a1.73741,1.73741,0,0,1,0,3.47481Z" transform="translate(-144.19918 -224.30788)" fill="#ccc"/><path d="M983.46178,646.49347H682.89113a1.7374,1.7374,0,0,1,0-3.4748H983.46178a1.7374,1.7374,0,0,1,0,3.4748Z" transform="translate(-144.19918 -224.30788)" fill="#ccc"/><path d="M983.46178,657.78659H682.89113a1.73741,1.73741,0,0,1,0-3.47481H983.46178a1.73741,1.73741,0,0,1,0,3.47481Z" transform="translate(-144.19918 -224.30788)" fill="#ccc"/><path d="M585.249,606.09886a21.28318,21.28318,0,0,1,0-42.56635H901.38375a18.5053,18.5053,0,0,0-16.23682-9.65289H256.75484a30.933,30.933,0,0,0-30.898,30.936,30.95213,30.95213,0,0,0,30.898,30.936H885.14693a18.50524,18.50524,0,0,0,16.23682-9.65283Z" transform="translate(-144.19918 -224.30788)" fill="#3d3c41"/><path d="M901.80385,575.26H601.23321a1.73741,1.73741,0,0,1,0-3.47481H901.80385a1.7374,1.7374,0,1,1,0,3.47481Z" transform="translate(-144.19918 -224.30788)" fill="#ccc"/><path d="M901.80385,586.55308H601.23321a1.7374,1.7374,0,0,1,0-3.4748H901.80385a1.7374,1.7374,0,1,1,0,3.4748Z" transform="translate(-144.19918 -224.30788)" fill="#ccc"/><path d="M901.80385,597.8462H601.23321a1.73741,1.73741,0,0,1,0-3.47481H901.80385a1.73741,1.73741,0,1,1,0,3.47481Z" transform="translate(-144.19918 -224.30788)" fill="#ccc"/><path d="M503.59127,544.15849a21.28321,21.28321,0,0,1,0-42.56641H819.726a18.50585,18.50585,0,0,0-16.23681-9.65289H175.09664a30.93217,30.93217,0,0,0-30.89746,30.936,30.95171,30.95171,0,0,0,30.89746,30.936H803.48922a18.50516,18.50516,0,0,0,16.23681-9.65277Z" transform="translate(-144.19918 -224.30788)" fill="#ccc"/><path d="M820.14593,513.31958H519.57529a1.73741,1.73741,0,0,1,0-3.47481H820.14593a1.7374,1.7374,0,1,1,0,3.47481Z" transform="translate(-144.19918 -224.30788)" fill="#ccc"/><path d="M820.14593,524.61269H519.57529a1.7374,1.7374,0,1,1,0-3.4748H820.14593a1.7374,1.7374,0,1,1,0,3.4748Z" transform="translate(-144.19918 -224.30788)" fill="#ccc"/><path d="M820.14593,535.90581H519.57529a1.7374,1.7374,0,0,1,0-3.4748H820.14593a1.7374,1.7374,0,1,1,0,3.4748Z" transform="translate(-144.19918 -224.30788)" fill="#ccc"/><path d="M827.08687,412.02171a6.50022,6.50022,0,0,1-6.47632-6.07519l-.96459-14.728a6.50015,6.50015,0,0,1,6.06127-6.91113l115.38746-7.55664a13.88,13.88,0,1,1,1.814,27.70068l-115.38721,7.55615Q827.30355,412.02147,827.08687,412.02171Z" transform="translate(-144.19918 -224.30788)" fill="#3d3c41"/><path d="M849.83956,413.92064a6.5084,6.5084,0,0,1-6.49268-6.25782l-.82226-21.998a6.49954,6.49954,0,0,1,6.25293-6.7378l94.88623-3.54638a6.50038,6.50038,0,0,1,6.73828,6.25293l.82226,21.998a6.49952,6.49952,0,0,1-6.25293,6.7378l-94.88623,3.54638C850.00313,413.91917,849.92086,413.92064,849.83956,413.92064Z" transform="translate(-144.19918 -224.30788)" fill="#2f2e41"/><path d="M961.031,616.7014H946.2712a6.50737,6.50737,0,0,1-6.5-6.5V487.18724a6.50736,6.50736,0,0,1,6.5-6.5H961.031a6.50736,6.50736,0,0,1,6.5,6.5V610.2014A6.50737,6.50737,0,0,1,961.031,616.7014Z" transform="translate(-144.19918 -224.30788)" fill="#2f2e41"/><path d="M895.51835,551.67716l-12.62188-7.65058a6.50737,6.50737,0,0,1-2.18933-8.92787L944.47142,429.9008a6.50738,6.50738,0,0,1,8.92787-2.18933l12.62189,7.65059a6.50737,6.50737,0,0,1,2.18933,8.92787l-63.76429,105.1979A6.50735,6.50735,0,0,1,895.51835,551.67716Z" transform="translate(-144.19918 -224.30788)" fill="#2f2e41"/><circle cx="794.41485" cy="77.0007" r="51" fill="#3d3c41"/><path d="M911.00806,318.72176a12.0954,12.0954,0,0,1-4.4169-2.59271,8.13347,8.13347,0,0,1-2.37749-6.439,5.47158,5.47158,0,0,1,2.43254-4.21108c1.8238-1.1699,4.26308-1.17336,6.74664-.07887l-.094-19.90968,1.99986-.00953.11063,23.40593-1.541-.96934c-1.78694-1.12214-4.33888-1.912-6.14208-.755a3.51372,3.51372,0,0,0-1.52155,2.71892,6.14621,6.14621,0,0,0,1.76778,4.80094c2.20841,2.10955,5.43042,2.76924,9.10469,3.35878l-.317,1.97452A32.96389,32.96389,0,0,1,911.00806,318.72176Z" transform="translate(-144.19918 -224.30788)" fill="#2f2e41"/><rect x="896.89087" y="280.79508" width="1.99975" height="10.77167" transform="translate(352.41545 914.56571) rotate(-82.4768)" fill="#2f2e41"/><rect x="930.59832" y="285.24552" width="1.99975" height="10.77167" transform="translate(377.29754 951.85076) rotate(-82.4768)" fill="#2f2e41"/><path d="M981.19918,520.19212h-86a8.50951,8.50951,0,0,1-8.5-8.5l18.00415-138.06445a8.48983,8.48983,0,0,1,8.49585-8.43555h30.52a46.032,46.032,0,0,1,45.98,45.98v100.52A8.50951,8.50951,0,0,1,981.19918,520.19212Z" transform="translate(-144.19918 -224.30788)" fill="#2f2e41"/><path d="M1055.18981,465.78908a6.5104,6.5104,0,0,1-.96738,7.00689l-9.64943,11.16857a6.49947,6.49947,0,0,1-9.16785.66889l-87.50086-75.59708a13.87944,13.87944,0,1,1,18.14762-21.00522l87.5012,75.59665A6.46389,6.46389,0,0,1,1055.18981,465.78908Z" transform="translate(-144.19918 -224.30788)" fill="#3d3c41"/><path d="M1035.87729,440.84144a6.51006,6.51006,0,0,1-.96748,7.00666l-16.48161,19.07669a6.50739,6.50739,0,0,1-9.16784.6689l-71.85068-62.07617a6.49946,6.49946,0,0,1-.66922-9.168l16.48116-19.07648a6.49948,6.49948,0,0,1,9.16785-.6689l71.85112,62.076A6.47185,6.47185,0,0,1,1035.87729,440.84144Z" transform="translate(-144.19918 -224.30788)" fill="#2f2e41"/><path d="M939.56779,271.06053c-6.81763-5.64183-15.93126-.30583-23.64118-1.06317-7.37624-.72457-13.31317-7.21594-14.931-14.20131-1.8875-8.1496,2.20387-16.428,8.36691-21.64861,6.75006-5.71783,15.81263-7.49465,24.449-6.62458,9.89839.9972,19.01778,5.42908,27.22791,10.84328a121.85093,121.85093,0,0,1,21.78291,17.7586c5.87072,6.24127,10.88632,13.71838,12.60436,22.23434,1.56134,7.73926.64531,16.36569-3.82068,23.03188a24.20535,24.20535,0,0,1-9.3242,7.98384c-3.9,2.00789-8.07309,3.46963-11.8455,5.72774-5.70393,3.41429-11.17849,10.373-9.2366,17.46955a9.79275,9.79275,0,0,0,2.30515,4.147c1.31763,1.408,3.6093-.52921,2.28819-1.9409-2.32034-2.47942-2.29475-5.84538-1.14094-8.88016a16.27227,16.27227,0,0,1,7.08105-8.09024c3.94892-2.35837,8.32982-3.851,12.38208-6.00784a27.02248,27.02248,0,0,0,9.75361-8.40065c4.768-6.89883,6.06465-15.78389,4.7983-23.9565-1.37038-8.844-6.07919-16.81476-11.9184-23.45829-6.3547-7.23-14.10718-13.305-22.01249-18.7446-8.48247-5.83678-17.82438-10.73014-28.09011-12.36914-8.89876-1.42076-18.493-.25967-26.15637,4.72065-7.15325,4.6488-12.55687,12.51455-12.94419,21.1964a22.23536,22.23536,0,0,0,10.75321,19.74136,19.10112,19.10112,0,0,0,11.45819,2.42612c4.25565-.3537,8.49577-1.73948,12.79069-1.45871a8.94075,8.94075,0,0,1,5.30755,2.028c1.48956,1.23267,3.18992-1.24152,1.71258-2.46406Z" transform="translate(-144.19918 -224.30788)" fill="#2f2e41"/><path d="M879.59864,536.87587q.02745-.16917.06422-.33783a6.45569,6.45569,0,0,1,2.83054-4.09112l12.40306-8.0001a6.50779,6.50779,0,0,1,8.98561,1.939l38.26114,59.31975a6.501,6.501,0,0,1-1.939,8.98561l-12.40353,8a6.50781,6.50781,0,0,1-8.98562-1.939l-38.26114-59.31976A6.45336,6.45336,0,0,1,879.59864,536.87587Z" transform="translate(-144.19918 -224.30788)" fill="#2f2e41"/></svg>
    </div>

  <div className="tutor-student-row row">

    <div className=" col-xl-3">
    <h2 className="tutor-student-header">For Tutors</h2>
    <p className='welcomePage-paragraph'>
    Register as a tutor today, <br/> to enable you reach out to students,<br/> help them with their academics and get paid
     </p>
     <div className="tutorBtn" onClick={handleClick}  value="tutor">
      Register as Tutor
      </div>
    </div>

    <div className="col-xl-3 student-column">
    <h2 className="tutor-student-header">For Students</h2>
    <p className='welcomePage-paragraph'>
    Join thousand of Students looking for tutors. <br /> Hire a tutor to help you  Prepare for exams or test.
     </p>
     <div className="studentBtn"  onClick={handleClick} value="student" >
     Register as Student</div>
    </div>

    <div className="col-xl-6">
      <div className='svg-image'>
     <svg  className="pic" id="b8e8e527-8ae9-42c1-86cd-ac5b5d82d2b9" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="911.60164" height="451.38424" viewBox="0 0 911.60164 451.38424"><path d="M666.90719,666.03923a21.28318,21.28318,0,0,1,0-42.56635H983.042a18.5053,18.5053,0,0,0-16.2373-9.65283H338.41256a30.93217,30.93217,0,0,0-30.89746,30.936,30.95171,30.95171,0,0,0,30.89746,30.936H966.80465a18.506,18.506,0,0,0,16.2373-9.65289Z" transform="translate(-144.19918 -224.30788)" fill="#ccc"/><path d="M983.46178,635.20036H682.89113a1.73741,1.73741,0,0,1,0-3.47481H983.46178a1.73741,1.73741,0,0,1,0,3.47481Z" transform="translate(-144.19918 -224.30788)" fill="#ccc"/><path d="M983.46178,646.49347H682.89113a1.7374,1.7374,0,0,1,0-3.4748H983.46178a1.7374,1.7374,0,0,1,0,3.4748Z" transform="translate(-144.19918 -224.30788)" fill="#ccc"/><path d="M983.46178,657.78659H682.89113a1.73741,1.73741,0,0,1,0-3.47481H983.46178a1.73741,1.73741,0,0,1,0,3.47481Z" transform="translate(-144.19918 -224.30788)" fill="#ccc"/><path d="M585.249,606.09886a21.28318,21.28318,0,0,1,0-42.56635H901.38375a18.5053,18.5053,0,0,0-16.23682-9.65289H256.75484a30.933,30.933,0,0,0-30.898,30.936,30.95213,30.95213,0,0,0,30.898,30.936H885.14693a18.50524,18.50524,0,0,0,16.23682-9.65283Z" transform="translate(-144.19918 -224.30788)" fill="#3d3c41"/><path d="M901.80385,575.26H601.23321a1.73741,1.73741,0,0,1,0-3.47481H901.80385a1.7374,1.7374,0,1,1,0,3.47481Z" transform="translate(-144.19918 -224.30788)" fill="#ccc"/><path d="M901.80385,586.55308H601.23321a1.7374,1.7374,0,0,1,0-3.4748H901.80385a1.7374,1.7374,0,1,1,0,3.4748Z" transform="translate(-144.19918 -224.30788)" fill="#ccc"/><path d="M901.80385,597.8462H601.23321a1.73741,1.73741,0,0,1,0-3.47481H901.80385a1.73741,1.73741,0,1,1,0,3.47481Z" transform="translate(-144.19918 -224.30788)" fill="#ccc"/><path d="M503.59127,544.15849a21.28321,21.28321,0,0,1,0-42.56641H819.726a18.50585,18.50585,0,0,0-16.23681-9.65289H175.09664a30.93217,30.93217,0,0,0-30.89746,30.936,30.95171,30.95171,0,0,0,30.89746,30.936H803.48922a18.50516,18.50516,0,0,0,16.23681-9.65277Z" transform="translate(-144.19918 -224.30788)" fill="#ccc"/><path d="M820.14593,513.31958H519.57529a1.73741,1.73741,0,0,1,0-3.47481H820.14593a1.7374,1.7374,0,1,1,0,3.47481Z" transform="translate(-144.19918 -224.30788)" fill="#ccc"/><path d="M820.14593,524.61269H519.57529a1.7374,1.7374,0,1,1,0-3.4748H820.14593a1.7374,1.7374,0,1,1,0,3.4748Z" transform="translate(-144.19918 -224.30788)" fill="#ccc"/><path d="M820.14593,535.90581H519.57529a1.7374,1.7374,0,0,1,0-3.4748H820.14593a1.7374,1.7374,0,1,1,0,3.4748Z" transform="translate(-144.19918 -224.30788)" fill="#ccc"/><path d="M827.08687,412.02171a6.50022,6.50022,0,0,1-6.47632-6.07519l-.96459-14.728a6.50015,6.50015,0,0,1,6.06127-6.91113l115.38746-7.55664a13.88,13.88,0,1,1,1.814,27.70068l-115.38721,7.55615Q827.30355,412.02147,827.08687,412.02171Z" transform="translate(-144.19918 -224.30788)" fill="#3d3c41"/><path d="M849.83956,413.92064a6.5084,6.5084,0,0,1-6.49268-6.25782l-.82226-21.998a6.49954,6.49954,0,0,1,6.25293-6.7378l94.88623-3.54638a6.50038,6.50038,0,0,1,6.73828,6.25293l.82226,21.998a6.49952,6.49952,0,0,1-6.25293,6.7378l-94.88623,3.54638C850.00313,413.91917,849.92086,413.92064,849.83956,413.92064Z" transform="translate(-144.19918 -224.30788)" fill="#2f2e41"/><path d="M961.031,616.7014H946.2712a6.50737,6.50737,0,0,1-6.5-6.5V487.18724a6.50736,6.50736,0,0,1,6.5-6.5H961.031a6.50736,6.50736,0,0,1,6.5,6.5V610.2014A6.50737,6.50737,0,0,1,961.031,616.7014Z" transform="translate(-144.19918 -224.30788)" fill="#2f2e41"/><path d="M895.51835,551.67716l-12.62188-7.65058a6.50737,6.50737,0,0,1-2.18933-8.92787L944.47142,429.9008a6.50738,6.50738,0,0,1,8.92787-2.18933l12.62189,7.65059a6.50737,6.50737,0,0,1,2.18933,8.92787l-63.76429,105.1979A6.50735,6.50735,0,0,1,895.51835,551.67716Z" transform="translate(-144.19918 -224.30788)" fill="#2f2e41"/><circle cx="794.41485" cy="77.0007" r="51" fill="#3d3c41"/><path d="M911.00806,318.72176a12.0954,12.0954,0,0,1-4.4169-2.59271,8.13347,8.13347,0,0,1-2.37749-6.439,5.47158,5.47158,0,0,1,2.43254-4.21108c1.8238-1.1699,4.26308-1.17336,6.74664-.07887l-.094-19.90968,1.99986-.00953.11063,23.40593-1.541-.96934c-1.78694-1.12214-4.33888-1.912-6.14208-.755a3.51372,3.51372,0,0,0-1.52155,2.71892,6.14621,6.14621,0,0,0,1.76778,4.80094c2.20841,2.10955,5.43042,2.76924,9.10469,3.35878l-.317,1.97452A32.96389,32.96389,0,0,1,911.00806,318.72176Z" transform="translate(-144.19918 -224.30788)" fill="#2f2e41"/><rect x="896.89087" y="280.79508" width="1.99975" height="10.77167" transform="translate(352.41545 914.56571) rotate(-82.4768)" fill="#2f2e41"/><rect x="930.59832" y="285.24552" width="1.99975" height="10.77167" transform="translate(377.29754 951.85076) rotate(-82.4768)" fill="#2f2e41"/><path d="M981.19918,520.19212h-86a8.50951,8.50951,0,0,1-8.5-8.5l18.00415-138.06445a8.48983,8.48983,0,0,1,8.49585-8.43555h30.52a46.032,46.032,0,0,1,45.98,45.98v100.52A8.50951,8.50951,0,0,1,981.19918,520.19212Z" transform="translate(-144.19918 -224.30788)" fill="#2f2e41"/><path d="M1055.18981,465.78908a6.5104,6.5104,0,0,1-.96738,7.00689l-9.64943,11.16857a6.49947,6.49947,0,0,1-9.16785.66889l-87.50086-75.59708a13.87944,13.87944,0,1,1,18.14762-21.00522l87.5012,75.59665A6.46389,6.46389,0,0,1,1055.18981,465.78908Z" transform="translate(-144.19918 -224.30788)" fill="#3d3c41"/><path d="M1035.87729,440.84144a6.51006,6.51006,0,0,1-.96748,7.00666l-16.48161,19.07669a6.50739,6.50739,0,0,1-9.16784.6689l-71.85068-62.07617a6.49946,6.49946,0,0,1-.66922-9.168l16.48116-19.07648a6.49948,6.49948,0,0,1,9.16785-.6689l71.85112,62.076A6.47185,6.47185,0,0,1,1035.87729,440.84144Z" transform="translate(-144.19918 -224.30788)" fill="#2f2e41"/><path d="M939.56779,271.06053c-6.81763-5.64183-15.93126-.30583-23.64118-1.06317-7.37624-.72457-13.31317-7.21594-14.931-14.20131-1.8875-8.1496,2.20387-16.428,8.36691-21.64861,6.75006-5.71783,15.81263-7.49465,24.449-6.62458,9.89839.9972,19.01778,5.42908,27.22791,10.84328a121.85093,121.85093,0,0,1,21.78291,17.7586c5.87072,6.24127,10.88632,13.71838,12.60436,22.23434,1.56134,7.73926.64531,16.36569-3.82068,23.03188a24.20535,24.20535,0,0,1-9.3242,7.98384c-3.9,2.00789-8.07309,3.46963-11.8455,5.72774-5.70393,3.41429-11.17849,10.373-9.2366,17.46955a9.79275,9.79275,0,0,0,2.30515,4.147c1.31763,1.408,3.6093-.52921,2.28819-1.9409-2.32034-2.47942-2.29475-5.84538-1.14094-8.88016a16.27227,16.27227,0,0,1,7.08105-8.09024c3.94892-2.35837,8.32982-3.851,12.38208-6.00784a27.02248,27.02248,0,0,0,9.75361-8.40065c4.768-6.89883,6.06465-15.78389,4.7983-23.9565-1.37038-8.844-6.07919-16.81476-11.9184-23.45829-6.3547-7.23-14.10718-13.305-22.01249-18.7446-8.48247-5.83678-17.82438-10.73014-28.09011-12.36914-8.89876-1.42076-18.493-.25967-26.15637,4.72065-7.15325,4.6488-12.55687,12.51455-12.94419,21.1964a22.23536,22.23536,0,0,0,10.75321,19.74136,19.10112,19.10112,0,0,0,11.45819,2.42612c4.25565-.3537,8.49577-1.73948,12.79069-1.45871a8.94075,8.94075,0,0,1,5.30755,2.028c1.48956,1.23267,3.18992-1.24152,1.71258-2.46406Z" transform="translate(-144.19918 -224.30788)" fill="#2f2e41"/><path d="M879.59864,536.87587q.02745-.16917.06422-.33783a6.45569,6.45569,0,0,1,2.83054-4.09112l12.40306-8.0001a6.50779,6.50779,0,0,1,8.98561,1.939l38.26114,59.31975a6.501,6.501,0,0,1-1.939,8.98561l-12.40353,8a6.50781,6.50781,0,0,1-8.98562-1.939l-38.26114-59.31976A6.45336,6.45336,0,0,1,879.59864,536.87587Z" transform="translate(-144.19918 -224.30788)" fill="#2f2e41"/></svg>
    </div>
    </div>
  </div>

        <Foot /> 

      </div>
    

   
  );
}


export default LandingPage;

