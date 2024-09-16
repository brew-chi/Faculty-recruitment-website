const db = require("../routes/db-config")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const upd2 = async (req, res)=>{
    const {p_uni, p_dept, p_sup, p_year, p_def, p_award, p_title, m_deg, m_uni, m_dept, m_yoj, m_yoc, m_dur, m_cgpa, m_class, b_deg, b_uni, b_dept, b_yoj, b_yoc, b_dur, b_cgpa, b_class, tw_school, tw_year, tw_grade, tw_class, ten_school, ten_year, ten_grade, ten_class} = req.body
    const decoded = jwt.verify(req.cookies.userRegistered, process.env.JWT_SEC)
    // console.log(req.body)
    db.query("UPDATE register SET ? WHERE id=?",[{p_uni:p_uni, p_dept:p_dept, p_sup:p_sup, p_year:p_year, p_def:p_def, p_award:p_award, p_title:p_title, 
        m_deg:m_deg, m_uni:m_uni, m_dept:m_dept, m_yoj:m_yoj, m_yoc:m_yoc, m_dur:m_dur, m_cgpa:m_cgpa, m_class:m_class, b_deg:b_deg, b_uni:b_uni, b_dept:b_dept, b_yoj:b_yoj, b_yoc:b_yoc, b_dur:b_dur, b_cgpa:b_cgpa, b_class:b_class, tw_school:tw_school, tw_year:tw_year, tw_grade:tw_grade, tw_class:tw_class, ten_school:ten_school, ten_year:ten_year, ten_grade:ten_grade, ten_class:ten_class},decoded.id], async (err)=>{
        if(err) return res.status(500).json({status : "error", error : "Internal Error"})
        return res.status(200).json({status : "success", success : "Details Updated"})
    })
}

module.exports = upd2

// p_uni : college_phd.value,
// p_dept : stream.value,
// p_sup : supervisor.value,
// p_year : yoj_phd.value,
// p_def : dod_phd.value,
// p_award : doa_phd.value,
// p_title : phd_title.value,
// m_deg : pg_degree.value,
// m_uni : pg_college.value,
// m_dept : pg_subjects.value,
// m_yoj : pg_yoj.value,
// m_yoc : pg_yog.value,
// m_dur : pg_duration.value,
// m_cgpa : pg_perce.value,
// m_class : pg_rank.value,
// b_deg : ug_degree.value,
// b_uni : ug_college.value,
// b_dept : ug_subjects.value,
// b_yoj : ug_yoj.value,
// b_yoc : ug_yog.value,
// b_dur : ug_duration.value,
// b_cgpa : ug_perce.value,
// b_class : ug_rank.value,
// tw_school : school1.value,
// tw_year : passing_year1.value,
// tw_grade : s_perce1.value,
// tw_class : s_rank1.value,
// ten_school : school2.value,
// ten_year : passing_year2.value,
// ten_grade : s_perce2.value,
// ten_class : s_rank2.value