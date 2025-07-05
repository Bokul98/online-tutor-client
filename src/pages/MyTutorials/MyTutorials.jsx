import React, { useEffect, useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import Loading from '../../components/Loading/Loading';
import { useTheme } from '../../context/ThemeContext/ThemeContext';

const MyTutorials = () => {
    const { user } = useContext(AuthContext);
    const { isDark } = useTheme();
    const [tutorials, setTutorials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deletingId, setDeletingId] = useState(null);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editData, setEditData] = useState(null);
    const [editLoading, setEditLoading] = useState(false);

    useEffect(() => {
        if (!user || !user.email) {
            setTutorials([]);
            setLoading(false);
            return;
        }
        fetch('https://online-tutor-booking-platform.vercel.app/api/tutorials')
            .then(res => res.json())
            .then(data => {
                // Filter tutorials by auth email
                const filtered = data.filter(t => t.email === user.email);
                setTutorials(filtered);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [user]);

    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                setDeletingId(id);
                try {
                    const res = await fetch(`https://online-tutor-booking-platform.vercel.app/api/tutorials/${id}`, {
                        method: 'DELETE',
                    });
                    if (!res.ok) throw new Error('Failed to delete');
                    setTutorials(tutorials.filter(t => t._id !== id));
                    Swal.fire(
                        'Deleted!',
                        'Your tutorial has been deleted.',
                        'success'
                    );
                } catch {
                    Swal.fire('Error!', 'Delete failed!', 'error');
                } finally {
                    setDeletingId(null);
                }
            }
        });
    };


    // Pagination state (must be outside conditional)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(tutorials.length / itemsPerPage);
    const paginatedTutorials = tutorials.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    if (loading) {
        return <Loading />;
    }

    // Open modal and set data for editing
    const handleEditClick = (tutorial) => {
        setEditData({ ...tutorial });
        setEditModalOpen(true);
    };

    // Handle input change in modal
    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditData((prev) => ({ ...prev, [name]: value }));
    };

    // Submit updated data to server
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        setEditLoading(true);
        try {
            const res = await fetch(`https://online-tutor-booking-platform.vercel.app/api/tutorials/edit/${editData._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editData),
            });
            if (!res.ok) throw new Error('Failed to update');
            // After update, fetch fresh data and filter by user email
            const refreshed = await fetch('https://online-tutor-booking-platform.vercel.app/api/tutorials');
            const newData = await refreshed.json();
            // Filter by user email
            const filtered = newData.filter(t => t.email === user.email);
            // Remove possible duplicates by _id
            const unique = [];
            const seen = new Set();
            for (const t of filtered) {
                if (!seen.has(t._id)) {
                    unique.push(t);
                    seen.add(t._id);
                }
            }
            setTutorials(unique);
            setEditModalOpen(false);
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: 'Tutorial updated successfully!',
                showConfirmButton: false,
                timer: 1800,
                timerProgressBar: true,
                background: '#fff',
                color: '#333',
                customClass: {
                  popup: 'shadow-lg rounded-xl border border-blue-100',
                  title: 'font-bold text-blue-700',
                  icon: 'text-green-500',
                },
            });
        } catch {
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'error',
                title: 'Update failed!',
                showConfirmButton: false,
                timer: 1800,
                timerProgressBar: true,
                background: '#fff',
                color: '#333',
                customClass: {
                  popup: 'shadow-lg rounded-xl border border-red-100',
                  title: 'font-bold text-red-600',
                  icon: 'text-red-500',
                },
            });
        } finally {
            setEditLoading(false);
        }
    };



    return (
        <div className={`my-12 md:my-20 transition-all duration-300 ${isDark ? 'theme-bg-primary' : ''}`}>
            <h1 className="text-3xl font-extrabold text-center my-10 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">My Tutorials</h1>
            <div className={`overflow-x-auto rounded-2xl shadow-2xl max-w-6xl mx-auto border transition-all duration-300 ${
                isDark ? 'theme-card-bg theme-border' : 'bg-white/90 border-blue-100'
            }`}>
                {tutorials.length === 0 ? (
                    <p className={`text-center mb-4 py-10 transition-colors duration-300 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>No tutorials found.</p>
                ) : (
                    <table className={`min-w-full divide-y transition-all duration-300 ${
                        isDark ? 'divide-slate-600' : 'divide-blue-200'
                    }`}>
                        <thead className={`transition-all duration-300 ${
                            isDark ? 'bg-gradient-to-r from-slate-700 to-slate-600' : 'bg-gradient-to-r from-blue-100 to-purple-100'
                        }`}>
                            <tr>
                                <th className={`px-4 py-4 text-left text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                                    isDark ? 'text-blue-300' : 'text-blue-700'
                                }`}>SL</th>
                                <th className={`px-4 py-4 text-left text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                                    isDark ? 'text-blue-300' : 'text-blue-700'
                                }`}>Image</th>
                                <th className={`px-4 py-4 text-left text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                                    isDark ? 'text-blue-300' : 'text-blue-700'
                                }`}>Language</th>
                                <th className={`px-4 py-4 text-left text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                                    isDark ? 'text-blue-300' : 'text-blue-700'
                                }`}>Price</th>
                                <th className={`px-4 py-4 text-left text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                                    isDark ? 'text-blue-300' : 'text-blue-700'
                                }`}>Description</th>
                                <th className={`px-4 py-4 text-left text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                                    isDark ? 'text-blue-300' : 'text-blue-700'
                                }`}>Review</th>
                                <th className={`px-4 py-4 text-center text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                                    isDark ? 'text-blue-300' : 'text-blue-700'
                                }`}>Actions</th>
                            </tr>
                        </thead>
                        <tbody className={`divide-y transition-all duration-300 ${
                            isDark ? 'theme-card-bg divide-slate-600' : 'bg-white divide-blue-100'
                        }`}>
                            {paginatedTutorials.map((tutorial, idx) => (
                                <tr key={tutorial._id} className={`transition-all duration-300 ${
                                    isDark 
                                        ? 'hover:bg-slate-700/50' 
                                        : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                                }`}>
                                    <td className="px-4 py-4 font-bold text-lg text-blue-500 text-center">{(currentPage - 1) * itemsPerPage + idx + 1}</td>
                                    <td className="px-4 py-4">
                                        <img src={tutorial.image} alt={tutorial.language} className="w-20 h-16 object-cover rounded-lg border-2 border-blue-200 shadow-md" />
                                    </td>
                                    <td className={`px-4 py-4 font-semibold text-lg transition-colors duration-300 ${
                                        isDark ? 'text-blue-400' : 'text-blue-800'
                                    }`}>{tutorial.language}</td>
                                    <td className={`px-4 py-4 font-bold rounded transition-all duration-300 ${
                                        isDark ? 'text-purple-400 bg-purple-900/30' : 'text-purple-700 bg-purple-50'
                                    }`}>${tutorial.price}</td>
                                    <td className={`px-4 py-4 max-w-xs truncate transition-colors duration-300 ${
                                        isDark ? 'theme-text-secondary' : 'text-gray-700'
                                    }`} title={tutorial.description}>{tutorial.description}</td>
                                    <td className="px-4 py-4 text-yellow-600 font-semibold">{tutorial.review}</td>
                                    <td className="px-4 py-4 flex gap-2 justify-center items-center">
                                        <button
                                            className="px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold shadow hover:scale-105 transition-transform duration-200 border border-blue-300"
                                            onClick={() => handleEditClick(tutorial)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="px-4 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full font-semibold shadow hover:scale-105 transition-transform duration-200 border border-red-300"
                                            onClick={() => handleDelete(tutorial._id)}
                                            disabled={deletingId === tutorial._id}
                                        >
                                            {deletingId === tutorial._id ? 'Deleting...' : 'Delete'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Pagination Controls */}
            {tutorials.length > itemsPerPage && (
                <div className="flex justify-center items-center gap-2 mt-8">
                    <button
                        className="px-3 py-1 rounded bg-blue-500 text-white font-bold shadow hover:bg-blue-600 disabled:bg-blue-200 transition"
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            className={`px-3 py-1 rounded font-bold shadow transition ${currentPage === i + 1 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-blue-700 hover:bg-purple-100'}`}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        className="px-3 py-1 rounded bg-blue-500 text-white font-bold shadow hover:bg-blue-600 disabled:bg-blue-200 transition"
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}

            {/* Edit Modal */}
            {editModalOpen && editData && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-100/60 via-purple-100/60 to-pink-100/80 backdrop-blur-[2px]">
                    <div className="bg-gradient-to-br from-white via-blue-50 to-pink-50 rounded-3xl p-0 sm:p-0 w-[98vw] max-w-lg shadow-2xl relative mx-2 animate-fadeIn flex flex-col overflow-hidden">
                        {/* Modal Header */}
                        <div className="flex items-center justify-center px-6 py-4 border-b border-blue-100 bg-gradient-to-r from-blue-50/80 via-purple-50/80 to-pink-50/80">
                            <h2 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow tracking-tight flex items-center gap-2">
                                <svg className="w-7 h-7 text-blue-400 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                                Edit Tutorial
                            </h2>
                        </div>
                        {/* Modal Body */}
                        <form onSubmit={handleEditSubmit} className="space-y-4 w-full px-6 py-4 overflow-y-auto max-h-[70vh] bg-gradient-to-br from-white/90 via-blue-50/80 to-purple-50/80">
                            <div>
                                <label className="block mb-1 text-sm font-semibold text-blue-700">User Name</label>
                                <input type="text" name="userName" value={editData.userName} disabled className="w-full border rounded-xl px-3 py-2 bg-gray-100 text-blue-700 font-bold cursor-not-allowed" placeholder="User Name" tabIndex={-1} />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-semibold text-blue-700">Email</label>
                                <input type="email" name="email" value={editData.email} disabled className="w-full border rounded-xl px-3 py-2 bg-gray-100 text-blue-700 font-bold cursor-not-allowed" placeholder="Email" tabIndex={-1} />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-semibold text-blue-700">Image URL</label>
                                <input type="text" name="image" value={editData.image} onChange={handleEditChange} className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-400" placeholder="Image URL" required />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-semibold text-blue-700">Language</label>
                                <input type="text" name="language" value={editData.language} onChange={handleEditChange} className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-400" placeholder="Language" required />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-semibold text-blue-700">Price</label>
                                <input type="number" name="price" value={editData.price} onChange={handleEditChange} className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-purple-400" placeholder="Price" required />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-semibold text-blue-700">Description</label>
                                <textarea name="description" value={editData.description} onChange={handleEditChange} className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-200 min-h-[80px] resize-y" placeholder="Description" required />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-semibold text-blue-700">Review</label>
                                <input type="number" name="review" value={editData.review} disabled className="w-full border rounded-xl px-3 py-2 bg-gray-100 text-gray-500 font-bold cursor-not-allowed" placeholder="Review" tabIndex={-1} />
                            </div>
                            <button type="submit" className="w-full py-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition font-extrabold text-lg shadow-xl disabled:opacity-70 mt-2 tracking-wide flex items-center justify-center gap-2" disabled={editLoading}>
                                <svg className={`w-5 h-5 ${editLoading ? 'animate-spin' : 'hidden'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeOpacity=".3" /><path d="M12 2a10 10 0 0 1 10 10" /></svg>
                                {editLoading ? 'Updating...' : 'Update'}
                            </button>
                        </form>
                        {/* Modal Footer */}
                        <div className="px-6 py-3 border-t border-blue-100 bg-gradient-to-r from-blue-100/80 via-purple-100/80 to-pink-100/80 flex justify-end">
                            <button
                                className="px-4 py-1 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 text-white font-bold shadow hover:from-blue-600 hover:to-purple-600 hover:to-pink-500 transition flex items-center gap-1"
                                type="button"
                                onClick={() => setEditModalOpen(false)}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyTutorials;