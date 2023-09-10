"use client";
import React from "react";
import ActiveUserAndLoginStatusContext from "@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext";
import { useContext, useState, useEffect } from "react";
import batchContext from "@/context/batch/batchContext";
import { useRouter } from "next/navigation";
import Loading from "@/components/common/Loading";
import StudentCard from "./StudentCard";
import styles from "./page.module.css"
import sortStudentInRoll from "./sortStudentsInNames";


const Page = ({ params }) => {
  const router = useRouter();
   // const paramBatchNum = params.batchNum; // page route number
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


  // ----  CONTEXT APIS -----
  const { loginStatus, activeUser, fetchActiveUser } = useContext(
    ActiveUserAndLoginStatusContext
  );
  const { batches, fetchAllBatch } = useContext(batchContext);

  // ---- STATES -------
  const [isPageExist, setIsPageExist] = useState(null);
  const [students, setStudents] = useState(null);
  const [batchRoute, setBatchRoute] = useState(params.batchNum);

  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{
    if (batches != null) {
      for (let i = 0; i < batches.length; i++) {
        if (batches[i].batchNum.toString() === batchRoute) {
          setIsPageExist(true);
          break;
        } else if (i === batches.length - 1) {
          setIsPageExist(false);
        }
      }
    }

  })

 
  useEffect(() => {
    fetchActiveUser(); // use to every page to check user login status
    fetchAllBatch();
    if (loginStatus === false) {
      router.push("/login");
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginStatus]);

  const getBatchStudents = async () => {
    const token = localStorage.getItem("token");
    const url = `${baseUrl}/api/batch/${batchRoute}/fetchStudents`;
    if (isPageExist && token) {
      // ----- fetchAPi ----
      const fetchStudents = await fetch(url, {
        method: "GET",
        headers: {
          token,
        },
      });
      const response = await fetchStudents.json();
      if (response.success) {
        setStudents(sortStudentInRoll(response.students));
      }
    } else {
      fetchActiveUser();
    }
  };

  useEffect(() => {
    getBatchStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPageExist]);

  return (
    <>
      {loginStatus ? (
        <section className="page_section">
          {isPageExist === false && <h1>Page not found</h1>}
          {isPageExist && (
            <div className={styles.students_container_box} >
              {/* --- BATCH STUDENTS CONTAINER ---- */}
              <h1 className={styles.batch_student_heading} >{`${batchRoute} batch students`}</h1>
              <div className={styles.only_students_box} >
                {students != null ?
                  students.map((student, index) => {
                    return (
                      <StudentCard student={student} cardType="student" key={index} />
                    )
                  })
                  :
                  <>
                    <StudentCard  cardType="skeleton" />
                    <StudentCard  cardType="skeleton" />
                    <StudentCard  cardType="skeleton" />
                    <StudentCard  cardType="skeleton" />
                    <StudentCard  cardType="skeleton" />
                    <StudentCard  cardType="skeleton" />
                    <StudentCard  cardType="skeleton" />
                    <StudentCard  cardType="skeleton" />
                  </>
                }
              </div>
            </div>
          )}
        </section>
      ) : (
        <section className="page_section">
          <Loading />
        </section>
      )}
    </>
  );
};

export default Page;