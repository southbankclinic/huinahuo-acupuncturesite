import { MessageCircle } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const FloatingWhatsApp = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/442079288333', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <button
            className="p-4 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg transition-colors"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-60 bg-white" align="end">
          <div className="space-y-2">
            <h3 className="font-medium">Chat with us</h3>
            <p className="text-sm text-muted-foreground">Contact us on WhatsApp for appointments and inquiries.</p>
            <button
              onClick={openWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-2 rounded-md text-sm transition-colors"
            >
              Open WhatsApp
            </button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FloatingWhatsApp;
