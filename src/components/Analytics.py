import random
import numpy as np
import matplotlib.pyplot as plt
from datetime import datetime, timedelta

# Constants
TOTAL_PROJECTS = 500  # Increased number of projects
DEPARTMENTS = ['Road', 'Pipeline', 'Utilities', 'Construction', 'IT']
STATUS_OPTIONS = ['Completed', 'Ongoing', 'Pending']
MACHINES = ['Excavator', 'Bulldozer', 'Crane', 'Loader', 'Paver']
NAMES = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown', 'Charlie Davis']

# Function to generate random dates
def random_date(start, end):
    return start + timedelta(days=random.randint(0, (end - start).days))

# Generate random projects
projects = []
for _ in range(TOTAL_PROJECTS):
    project_name = f"Project {random.randint(1, 1000)}"
    projects.append({
        'projectName': project_name,
        'description': f"Description for {project_name}",
        'department': random.choice(DEPARTMENTS),
        'projectManager': random.choice(NAMES),
        'startDate': random_date(datetime(2021, 1, 1), datetime(2023, 1, 1)),
        'endDate': random_date(datetime(2023, 1, 1), datetime(2025, 1, 1)),
        'budget': random.randint(100000, 500000),
        'status': random.choice(STATUS_OPTIONS)
    })

# Analytics Scenarios
def analytics(projects):
    total_projects = len(projects)
    completed_projects = len([p for p in projects if p['status'] == 'Completed'])
    ongoing_projects = len([p for p in projects if p['status'] == 'Ongoing'])
    
    print(f"1. Total number of projects: {total_projects}")
    print(f"   - Completed: {completed_projects}, Ongoing: {ongoing_projects}")

    # Generate completion percentages
    percentages = [random.randint(0, 100) for _ in projects]
    for i, project in enumerate(projects):
        project['completion'] = percentages[i]

    # Plotting analytics
    # 1. Project status distribution
    status_counts = {status: len([p for p in projects if p['status'] == status]) for status in STATUS_OPTIONS}
    
    plt.figure(figsize=(10, 6))
    plt.bar(status_counts.keys(), status_counts.values(), color='royalblue')
    plt.title('Project Status Distribution')
    plt.xlabel('Status')
    plt.ylabel('Number of Projects')
    plt.show()

    # 2. Area Plot for Project Completion Percentages
    plt.figure(figsize=(10, 6))
    sorted_percentages = np.sort(percentages)
    plt.fill_between(range(len(sorted_percentages)), sorted_percentages, color='green', alpha=0.5)
    plt.title('Project Completion Percentages (Area Plot)')
    plt.xlabel('Projects (Sorted by Completion)')
    plt.ylabel('Completion Percentage')
    plt.xticks(ticks=range(len(sorted_percentages)), labels=sorted_percentages, rotation=90)
    plt.grid()
    plt.tight_layout()
    plt.show()

    # 3. Projects by department (Bar Chart)
    department_counts = {dept: len([p for p in projects if p['department'] == dept]) for dept in DEPARTMENTS}
    plt.figure(figsize=(10, 6))
    plt.bar(department_counts.keys(), department_counts.values(), color='orange')
    plt.title('Projects Distribution by Department')
    plt.xlabel('Department')
    plt.ylabel('Number of Projects')
    plt.show()

    # 4. Line Chart of Project Budgets Over Time
    budgets = [p['budget'] for p in projects]
    plt.figure(figsize=(10, 6))
    plt.plot(budgets, marker='o', color='purple')
    plt.title('Budgets of Projects')
    plt.xlabel('Project Index')
    plt.ylabel('Budget')
    plt.grid()
    plt.show()

    # 5. Pie Chart for Status Distribution
    plt.figure(figsize=(8, 8))
    plt.pie(status_counts.values(), labels=status_counts.keys(), autopct='%1.1f%%', startangle=90, colors=['lightblue', 'lightgreen', 'salmon'])
    plt.title('Project Status Distribution (Pie Chart)')
    plt.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.
    plt.show()

    # 6. Total Budget by Department
    budget_by_department = {dept: sum(p['budget'] for p in projects if p['department'] == dept) for dept in DEPARTMENTS}
    plt.figure(figsize=(10, 6))
    plt.bar(budget_by_department.keys(), budget_by_department.values(), color='teal')
    plt.title('Total Budget by Department')
    plt.xlabel('Department')
    plt.ylabel('Total Budget')
    plt.show()

    # 7. Completion Percentage by Department
    completion_by_department = {dept: np.mean([p['completion'] for p in projects if p['department'] == dept]) for dept in DEPARTMENTS}
    plt.figure(figsize=(10, 6))
    plt.bar(completion_by_department.keys(), completion_by_department.values(), color='darkcyan')
    plt.title('Average Project Completion Percentage by Department')
    plt.xlabel('Department')
    plt.ylabel('Average Completion Percentage')
    plt.show()

    # 8. Analytics for Machine Usage
    machine_counts = {machine: random.randint(5, 20) for machine in MACHINES}  # Random counts for machines
    plt.figure(figsize=(10, 6))
    plt.bar(machine_counts.keys(), machine_counts.values(), color='coral')
    plt.title('Machine Usage Distribution')
    plt.xlabel('Machines')
    plt.ylabel('Number of Requests')
    plt.show()

# Call analytics function
analytics(projects)
