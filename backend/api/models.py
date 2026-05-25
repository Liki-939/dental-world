from django.db import models

class Location(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    address = models.TextField()
    phone = models.CharField(max_length=20)
    map_url = models.URLField(blank=True)
    
    def __str__(self):
        return self.name

class Treatment(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    short_description = models.TextField()
    full_description = models.TextField()
    icon = models.ImageField(upload_to='treatments/icons/', blank=True, null=True)
    image = models.ImageField(upload_to='treatments/images/', blank=True, null=True)
    benefits = models.JSONField(default=list, help_text='List of benefits')
    cost_info = models.TextField(blank=True)
    
    def __str__(self):
        return self.title

class Doctor(models.Model):
    name = models.CharField(max_length=100)
    specialization = models.CharField(max_length=100)
    experience_years = models.IntegerField()
    bio = models.TextField()
    photo = models.ImageField(upload_to='doctors/', blank=True, null=True)
    
    def __str__(self):
        return self.name

class LandingPage(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    treatment = models.ForeignKey(Treatment, on_delete=models.SET_NULL, null=True, blank=True)
    location = models.ForeignKey(Location, on_delete=models.SET_NULL, null=True, blank=True)
    hero_headline = models.CharField(max_length=200)
    hero_subheadline = models.TextField()
    
    def __str__(self):
        return self.title

class Blog(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    content = models.TextField()
    author = models.ForeignKey(Doctor, on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='blog/', blank=True, null=True)
    
    def __str__(self):
        return self.title

class FAQ(models.Model):
    question = models.CharField(max_length=200)
    answer = models.TextField()
    treatment = models.ForeignKey(Treatment, on_delete=models.CASCADE, related_name='faqs', null=True, blank=True)
    
    def __str__(self):
        return self.question

class Testimonial(models.Model):
    patient_name = models.CharField(max_length=100)
    text = models.TextField()
    rating = models.IntegerField(default=5)
    treatment = models.ForeignKey(Treatment, on_delete=models.SET_NULL, null=True, blank=True)
    video_url = models.URLField(blank=True, null=True)
    
    def __str__(self):
        return f"{self.patient_name} - {self.treatment}"

class Review(models.Model):
    author_name = models.CharField(max_length=100)
    rating = models.IntegerField(default=5)
    text = models.TextField()
    platform = models.CharField(max_length=50, default='Google')
    
    def __str__(self):
        return f"{self.author_name} - {self.rating} Stars"

class Gallery(models.Model):
    title = models.CharField(max_length=100)
    image_before = models.ImageField(upload_to='gallery/before/', blank=True, null=True)
    image_after = models.ImageField(upload_to='gallery/after/', blank=True, null=True)
    treatment = models.ForeignKey(Treatment, on_delete=models.SET_NULL, null=True, blank=True)
    
    def __str__(self):
        return self.title

class Appointment(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    email = models.EmailField(blank=True)
    treatment = models.ForeignKey(Treatment, on_delete=models.SET_NULL, null=True, blank=True)
    location = models.ForeignKey(Location, on_delete=models.SET_NULL, null=True, blank=True)
    preferred_date = models.DateField(null=True, blank=True)
    preferred_time = models.TimeField(null=True, blank=True)
    message = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.name} - {self.phone}"
