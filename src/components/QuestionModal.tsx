
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';

interface QuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  question: string;
  answer?: string;
}

const QuestionModal: React.FC<QuestionModalProps> = ({
  isOpen,
  onClose,
  question,
  answer
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg rounded-xl border-0 shadow-xl">
        <DialogHeader>
          <DialogTitle 
            className="text-lg md:text-xl font-bold text-blue-900"
            style={{
              textShadow: '0px 1px 1px rgba(255,255,255,0.5)'
            }}
          >
            {question}
          </DialogTitle>
          <DialogDescription className="mt-4 text-foreground">
            {answer || "This is a thought-provoking question about AI. What do you think?"}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default QuestionModal;
