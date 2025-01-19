export default function Footer() {
  return (
    <footer className="py-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nils Janis Wolters. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
} 