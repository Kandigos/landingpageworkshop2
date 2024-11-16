import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import initialContent from '../data/content.json';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  maxParticipants: number;
  availableSpots: number;
  payboxLink: string;
  price: number;
}

interface Review {
  name: string;
  text: string;
  role: string;
}

interface Instructor {
  name: string;
  bio: string;
}

interface Schedule {
  includes: string;
}

interface Content {
  title: string;
  subtitle: string;
  aboutExperience: string;
  instructor: Instructor;
  events: Event[];
  schedule: Schedule;
  reviews: Review[];
}

interface ContentContextType {
  content: Content;
  updateContent: (newContent: Content) => Promise<void>;
  isLoading: boolean;
}

const defaultContent: Content = {
  title: '',
  subtitle: '',
  aboutExperience: '',
  instructor: { name: '', bio: '' },
  events: [],
  schedule: { includes: '' },
  reviews: []
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

const CONTENT_DOC_ID = 'site_content';

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<Content>(defaultContent);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const docRef = doc(db, 'content', CONTENT_DOC_ID);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const savedContent = docSnap.data() as Content;
          setContent(savedContent);
        } else {
          await setDoc(docRef, initialContent);
          setContent(initialContent);
        }
      } catch (error) {
        console.error('Error loading content:', error);
        setContent(initialContent);
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, []);

  const updateContent = async (newContent: Content): Promise<void> => {
    try {
      const docRef = doc(db, 'content', CONTENT_DOC_ID);
      await setDoc(docRef, newContent);
      setContent(newContent);
    } catch (error) {
      console.error('Error updating content:', error);
      throw error;
    }
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, isLoading }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}