import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const JobPage = ({ deleteJob }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const job = useLoaderData();
  
  const onDeleteClick = (jobId) => {
    const confirm = window.confirm('Are you sure you want to delete this listing?')

    if(!confirm) return;

    deleteJob(jobId);

    toast.success('Job Deleted Successfully');

    navigate('/jobs');
  };

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-centre"
            >
              <FaArrowLeft className="mt-1 mr-2"/> Back to Job Listing
            </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 mg:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
              {job && (
                <div className="text-gray-500 mb-4">{ job.type }</div>
                 )}

                <h1 className="text-3xl font-bold mb-4">{ job.title }</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapMarker className="text-orange-700 mr-1 mt-1"/>
                  <p className="text-orange-700 font-bold">{job.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">Job Description</h3>
                <p className="mb-4 text-1xl font-bold">{job.description}</p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

                <p className="mb-2 mt-4 font-bold">{job.salary}</p>
              </div>
            </main>

            <aside>
              <div className="bg-white p-6rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info:</h3>

                <h2 className="text-2xl font-bold">{job.company.companyName}</h2>

                <p className="my-3 text-1xl font-bold">{job.company.companyDescription}</p>

                <hr className="my-4"/>

                <h3 className="text-xl font-bold">Contact Email:</h3>

                <p className="my-2 bg-indigo-100 p-3 font-bold">{job.company.contactEmail}</p>

                <h3 className="text-xl font-bold">Contact Phone:</h3>

                <p className="my-2 bg-indigo-100 p-3 font-bold">{job.company.contactPhone}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h2 className="text-xl font-bold mb-7 mr-3">Manage Job</h2>
                <Link 
                  to={`/edit-jobs/${job.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">Edit Job</Link>

                  <button onClick={ () => onDeleteClick(job.id) } className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                  >Delete Job</button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };