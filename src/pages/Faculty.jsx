import Footer from "../Components/Footer";
import "./Faculty.css";

export default function Faculty() {
  const directorData = [
    {
      id: "1",
      name: "Capt. C. L. Dubey",
      image: "/photo_gallery/capt.cl dubey.png",
    },
    {
      id: "2",
      name: "Capt. O. P. Yadav",
      image: "/photo_gallery/capt.op yadav.png",
    },
  ];

  const facultyData = [
    { id: "1", name: "CAPT. F. X. COUTINHO, PRINCIPAL" },
    { id: "2", name: "CAPT. M. R. MARTINS, VICE PRINCIPAL" },
    { id: "3", name: "CAPT.S.K.SHARMA" },
    { id: "4", name: "CAPT.S.K.PRASAD" },
    { id: "5", name: "CAPT.S.GOMEZ" },
    { id: "6", name: "CAPT. A. SAYED" },
    { id: "7", name: "CAPT.R.J.KARAI" },
    { id: "8", name: "MR. TREVAS ANTHONY FERNANDES R/O " },
    { id: "9", name: "CAPT. MICHAEL JACQUET" },
    { id: "10", name: "CAPT. F. TOSCANO" },
    { id: "11", name: "CAPT. RIYAZ AHMED YUSUF KAZI" },
    { id: "12", name: "CAPT. ZAHID ALI MULLA" },
    { id: "13", name: "MR. KUNAL HARISHANKAR THAKUR R/O " },
    { id: "14", name: "CAPT. L.K.PANDA, (EX.NA)" },
    { id: "15", name: "CAPT. Y. CHHABRA" },
    { id: "16", name: "Capt. Rajiv Uppal" },
    { id: "17", name: "CAPT. NITIN KARNIK" },
    { id: "18", name: "MR AJIT SINHA, C/E" },
    { id: "19", name: "MR.UBALDO VAZ, R/O" },
    { id: "20", name: "MR. JAGDISHWAR SANGAM, R/O" },
    { id: "21", name: "MR. KUNAL THAKUR, R/O" },
    { id: "22", name: "DR. NEELAM KARANDE" },
    { id: "23", name: "Dr. Nikhil Ranjan Siddhanta" },
    { id: "24", name: "NURSE. SANJANA RAUT" },
    { id: "25", name: "MR. B. BHOMICK, INSTR." },
    { id: "26", name: "MR. SHER BAHADUR YADAV, INSTR." },
    { id: "27", name: "MR. S.K.CHAUHAN, INSTR." },
  ];
  const mid = Math.ceil(facultyData.length / 2);
  const leftData = facultyData.slice(0, mid);
  const rightData = facultyData.slice(mid);

  return (
    <section id="faculty" className="faculty">
      <h2 className="section-title">Our Directors</h2>
      <div className="about-image">
        {directorData.map((director) => (
          <div key={director.id} className="director-card">
            <img
              src={director.image}
              alt={director.name}
              className="director-img"
            />
            <div className="director-name">{director.name}</div>
          </div>
        ))}
      </div>
      <div className="faculty-container">
        <h2 className="section-title">Our Faculty</h2>

        <div className="faculty-table-wrapper">
          <table className="faculty-table">
            <tbody>
              {leftData.map((faculty, idx) => (
                <tr key={idx} className={faculty.id === "" ? "header-row" : ""}>
                  <td>{faculty.id}</td>
                  <td>
                    <img
                      className="faculty-img"
                      src="/img/empty_profile.png"
                      alt="Faculty photo"
                    />
                  </td>
                  <td>{faculty.name}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table className="faculty-table">
            <tbody>
              {rightData.map((faculty, idx) => (
                <tr key={idx} className={faculty.id === "" ? "header-row" : ""}>
                  <td>{faculty.id}</td>
                  <td>
                    <img
                      className="faculty-img"
                      src="/img/empty_profile.png"
                      alt="Faculty photo"
                    />
                  </td>
                  <td>{faculty.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="faculty-header">
          <p className="faculty-subtitle">
            The MMTI is proud of having one of the best faculty in Maritime
            Training sector. The faculties here are of diversified nature such
            as Master Mariners, Chief Engineer, MBBS (Doctor), H.R.D Personnel,
            Radio Officers & Indian Navy instructors. Most of the faculty is
            highly qualified well experienced in Maritime training and best in
            the art of sharing knowledge.
            <br />
            <br />
            Presently there are 3 extra masters who are teaching at MMTI Andheri
            (W) campus. Eg: Capt. C.L. Dubey, Capt.L.K.Panda (Visiting).
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}
