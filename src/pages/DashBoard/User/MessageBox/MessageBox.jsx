import { useEffect, useState } from 'react';
import useAxios from '../../../../hooks/useAxios';
import useAuth from '../../../../hooks/useAuth';

const MessageBox = () => {

    const axiosInstance = useAxios();
    const {user} = useAuth();

    const [messages, setMessages] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const messagesPerPage = 5;

    useEffect(()=>{
        axiosInstance.get(`/user-message/${user?.displayName}`)
        .then(data=> setMessages(data.data))
    },[axiosInstance, user])

    console.log(messages);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const filteredMessages = messages.filter(message =>
        message.senderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.messageSubject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.message.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastMessage = currentPage * messagesPerPage;
    const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
    const currentMessages = filteredMessages.slice(indexOfFirstMessage, indexOfLastMessage);

    const totalPages = Math.ceil(filteredMessages.length / messagesPerPage);

    const handleMessageClick = (message) => {
        setSelectedMessage(message);
        if (!message.read) {
            const updatedMessages = messages.map(msg =>
                msg.id === message.id ? { ...msg, read: true } : msg
            );
            setMessages(updatedMessages);
        }
    };

    const handleDeleteMessage = (id) => {
        setMessages(messages.filter(message => message.id !== id));
        alert("Message deleted.");
    };

    const handleToggleRead = (id) => {
        const updatedMessages = messages.map(message =>
            message.id === id ? { ...message, read: !message.read } : message
        );
        setMessages(updatedMessages);
        alert(`Message marked as ${updatedMessages.find(m => m.id === id).read ? 'read' : 'unread'}.`);
    };


    return (
        <>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6">Messages</h1>

                <div className="mb-4">
                    <input
                        type="search"
                        placeholder="Search messages..."
                        className="w-full px-4 py-2 border rounded-md focus:outline-none"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>

                <div className="overflow-hidden rounded-md shadow-md border bg-white">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sender</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentMessages.map((message) => (
                                <tr key={message._id} className="cursor-pointer hover:bg-gray-100" onClick={() => handleMessageClick(message)}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{message.senderName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{message.messageSubject}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${message.read ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                            {message.read ? "Read" : "Unread"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <button
                                            className="text-blue-600 hover:text-blue-800 mr-2"
                                            onClick={(e) => { e.stopPropagation(); handleToggleRead(message._id); }}
                                        >
                                            {message.read ? 'Mark as Unread' : 'Mark as Read'}
                                        </button>
                                        <button
                                            className="text-red-600 hover:text-red-800"
                                            onClick={(e) => { e.stopPropagation(); handleDeleteMessage(message._id); }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 flex justify-between">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <div className="text-gray-700">
                        Page {currentPage} of {totalPages}
                    </div>
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>

                {selectedMessage && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                        <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
                            <h2 className="text-lg font-semibold">{selectedMessage.messageSubject}</h2>
                            <p className="text-sm text-gray-700">From: {selectedMessage.senderName}</p>
                            <p className="mt-4">{selectedMessage.message}</p>
                          
                            <button
                                onClick={() => setSelectedMessage(null)}
                                className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>

        </>
    );
};

export default MessageBox;