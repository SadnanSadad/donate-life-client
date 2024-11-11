import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FiSearch, FiUsers } from 'react-icons/fi'

const AdminHome = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [recentDonations, setRecentDonations] = useState([
        { id: 1, donorName: "John Doe", bloodType: "A+", date: "2023-06-15", status: "Completed" },
        { id: 2, donorName: "Jane Smith", bloodType: "O-", date: "2023-06-14", status: "Completed" },
        { id: 3, donorName: "Bob Johnson", bloodType: "B+", date: "2023-06-13", status: "Pending" },
        { id: 4, donorName: "Alice Brown", bloodType: "AB-", date: "2023-06-12", status: "Completed" },
        { id: 5, donorName: "Charlie Davis", bloodType: "A-", date: "2023-06-11", status: "Pending" },
    ])

    const handleSearch = (event) => setSearchTerm(event.target.value)

    const filteredDonations = recentDonations.filter(donation =>
        donation.donorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donation.bloodType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donation.status.toLowerCase().includes(searchTerm.toLowerCase())
    )


    return (
        <>
            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top bar */}
                <header className="bg-white shadow-md p-4 flex items-center justify-between">
                    <button className="md:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <FaBars className="text-gray-700 h-6 w-6" />
                    </button>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <FiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="search"
                                placeholder="Search..."
                                className="input input-bordered pl-8 w-64"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                        </div>
                    </div>
                </header>

                {/* Dashboard content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
                    <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
                    <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                        {/* Total Donors */}
                        <div className="card shadow-lg">
                            <div className="card-body">
                                <h2 className="card-title flex items-center justify-between">
                                    <span>Total Donors</span>
                                    <FiUsers className='text-red-700' />
                                </h2>
                                <p className="text-2xl font-bold">1,259</p>
                                <p className="text-xs text-gray-500">+20% from last month</p>
                            </div>
                        </div>
                        {/* Other cards... */}
                    </div>
                    <div className="card shadow-lg col-span-2">
                        <div className="card-body">
                            <h2 className="card-title flex justify-between items-center">
                                Recent Donations
                            </h2>
                            <div className="overflow-x-auto">
                                <table className="table w-full">
                                    <thead>
                                        <tr>
                                            <th>Donor Name</th>
                                            <th>Blood Type</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredDonations.map((donation) => (
                                            <tr key={donation.id}>
                                                <td>{donation.donorName}</td>
                                                <td>{donation.bloodType}</td>
                                                <td>{donation.date}</td>
                                                <td>
                                                    <span className={`badge ${donation.status === 'Completed' ? 'badge-success' : 'badge-warning'}`}>
                                                        {donation.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default AdminHome;