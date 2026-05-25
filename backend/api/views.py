from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Location, Treatment, Doctor, LandingPage, Blog, FAQ, Testimonial, Review, Gallery, Appointment
from .serializers import (
    LocationSerializer, TreatmentSerializer, DoctorSerializer,
    LandingPageSerializer, BlogSerializer, FAQSerializer,
    TestimonialSerializer, ReviewSerializer, GallerySerializer,
    AppointmentSerializer
)

class LocationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    lookup_field = 'slug'

class TreatmentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Treatment.objects.all()
    serializer_class = TreatmentSerializer
    lookup_field = 'slug'

class DoctorViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

class LandingPageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = LandingPage.objects.all()
    serializer_class = LandingPageSerializer
    lookup_field = 'slug'

class BlogViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    lookup_field = 'slug'

class FAQViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer

class TestimonialViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer

class ReviewViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class GalleryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    http_method_names = ['post']
