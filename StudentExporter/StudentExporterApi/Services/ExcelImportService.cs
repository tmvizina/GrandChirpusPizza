namespace StudentExporterApi.Services
{
    using System;
    using Excel = Microsoft.Office.Interop.Excel;
    public class ExcelImportService
    {
        static List<Student> ReadStudentsFromCsv(string filePath)
        {
            List<Student> students = new List<Student>();

            try
            {
                using (StreamReader reader = new StreamReader(filePath))
                {
                    while (!reader.EndOfStream)
                    {
                        string line = reader.ReadLine();
                        string[] values = line.Split(',');

                        // Assuming the CSV format is: Name,Age,Grade
                        if (values.Length == 3)
                        {
                            Student student = new Student
                            {
                                Name = values[0],
                                Age = int.Parse(values[1]),
                                Grade = values[2]
                            };

                            students.Add(student);
                        }
                        else
                        {
                            Console.WriteLine($"Skipping invalid line: {line}");
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error reading CSV file: {ex.Message}");
            }

            return students;
        }
    }
}
