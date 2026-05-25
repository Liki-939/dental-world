from rest_framework import serializers
from .models import Location, Treatment, Doctor, LandingPage, Blog, FAQ, Testimonial, Review, Gallery, Appointment

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'

class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = '__all__'

class TreatmentSerializer(serializers.ModelSerializer):
    faqs = FAQSerializer(many=True, read_only=True)
    
    class Meta:
        model = Treatment
        fields = '__all__'

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'

class LandingPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = LandingPage
        fields = '__all__'

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'

class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = '__all__'

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'
