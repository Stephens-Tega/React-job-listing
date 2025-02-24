import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./Layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

const App = () => {
  // Add Jobs
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // Delete Jobs
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };

  // Updated job
  const updatedJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };

  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={ <HomePage /> } />
      <Route path='/jobs' element={ <JobsPage /> } />
      <Route path='/add-job' element={ <AddJobPage addJobSubmit={addJob} /> } />
      <Route path='/add-jobs/:id' element={ <JobPage deleteJob={deleteJob} /> } loader={jobLoader} />
      <Route path='/edit-jobs/:id' element={ <EditJobPage updatedJobSubmit={updatedJob} /> } loader={jobLoader} />
      <Route path='*' element={ <NotFoundPage /> } />
    </Route>
  
    )
  );

  return <RouterProvider router={ router } />;
};

export default App;