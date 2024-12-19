import { Modal } from "./modal";

interface DeleteSongModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function DeleteSongModal({ isOpen, onClose }: DeleteSongModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col items-center space-y-5 py-5">
                <h2 className="text-2xl font-bold text-white">Delete Song</h2>
                <p className="text-sm text-white px-10">
                    Are you sure you want to delete this song? This action cannot be undone.
                </p>
                <div className="flex items-center gap-4 pt-5">
                    <button className="text-white font-bold bg-danger rounded-md px-10 py-2">
                        Delete
                    </button>
                    <button 
                        onClick={onClose}
                        className="text-white font-bold bg-[#2A5CBC1A] rounded-md px-10 py-2 border border-secondary">
                        Cancel
                    </button>
                </div>
            </div>
        </Modal>
    )
}